'use server'

import { getImgBase64Result } from "@/app/api/captcha/route";
import dao from "../../__CORE__/dao";
import { Dot } from "../../__CORE__/utils/TranslationUtils";
import { AsyncCreateResponse, CheckRules, fn_verifyVCode, validateEachRuleInArr } from "../action-types";
import { setCookie, getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import _ from "lodash";
import { InvitationCode, User, UserToken } from "@/app/__CORE__/dao/model";
import { checkIfStrOnlyHasAlphanumeric } from "./utils";
import { randomUUID } from "crypto";

export type Elb3AuthBody = {
    userAcctId: string,
    sessionVal: string
}

export let signInWithUserId = async (userAcctId: string) => {
    let userInfo = await getUserInfoByUserAcctId(userAcctId)
    if (!userInfo) {
        throw new Error('user not found')
    }
    if (!userInfo.id) {
        throw new Error('user id not found')
    }
    let daoRef = await dao()
    let key_sessionGroup = 'session-group';
    let token = randomUUID();
    // init set
    await daoRef.redis.sAdd(key_sessionGroup, userAcctId) // add user acct into the set
    let sessionVal = await daoRef.redis.hGet(key_sessionGroup + ':' + userAcctId, 'token')
    if (_.isEmpty(sessionVal)) {
        sessionVal = randomUUID().toString()
        await daoRef.redis.hSet(key_sessionGroup + ':' + userAcctId, 'token', sessionVal) // set user acct session id
    }
    // add to cookie
    let push: Elb3AuthBody = {
        userAcctId: userInfo.userAcctId,
        sessionVal: sessionVal + ''
    }
    setCookie('elb3-auth', JSON.stringify(push), {
        maxAge: -1,
        path: '/'
    })
}

export let getUserInfoByUserAcctId = async (userAcctId: string): Promise<User | null> => {
    await dao()
    let user = await User.findOne({
        where: {
            userAcctId: userAcctId
        }
    })
    return user;
}


export default async function create(formData: {
    preview: boolean,
    userAcctId: string,
    password: string,
    phoneNumber: string,
    invitationCode: string,
    confirmPassword: string,
    vcode: string
}): Promise<AsyncCreateResponse<{ newUser?: User }>> {
    console.log('formData', formData)
    let daoRef = await dao()
    let invitationCodeItem = await InvitationCode.findOne({
        where: {
            code: formData.invitationCode
        }
    })
    let rules: CheckRules[] = [
        {
            type: "non-empty",
            name: "userAcctId",
            label: Dot("oHQNQ4mRw", "User ID"),
        },
        {
            type: "non-empty",
            name: "password",
            label: Dot("TXdh_K", "Password"),
        },
        {
            type: "non-empty",
            name: "confirmPassword",
            label: Dot("TqXdh_K", "Confirm Password"),
        },
        {
            type: 'non-empty',
            name: 'phoneNumber',
            label: Dot("TqXdd3h_wK", "Telephone Number"),
        },
        {
            type: "non-empty",
            name: "invitationCode",
            label: Dot("Xddh_wK", "Invitation Code"),
        },
        {
            type: "non-empty",
            name: "vcode",
            label: Dot("TqXddh_K", "Verification Code"),
        },
        {
            type: "valid-phone",
            name: "phoneNumber",
            label: Dot("TdXddh_wK", "Telephone Number"),
        },
        {
            type: 'check-fn',
            name: 'userAcctId',
            validateFn: async (val) => {
                let user = await getUserInfoByUserAcctId(val)
                if (user) {
                    return Dot("8sVG1RdXhx", "User ID already exists")
                }
                let ok = checkIfStrOnlyHasAlphanumeric(val)
                if (!ok) {
                    return Dot("8sVGdXhx", "User ID should only contain letters and numbers")
                }
                if (val.length < 2) {
                    return Dot("8sVG1kqXhx", "User ID should be at least 2 characters")
                }
                let prohibittedArr = [
                    "admin",
                    "administrator",
                    "root",
                    "superuser",
                    "system",
                    "sys",
                    "systemadmin",
                    "sysadmin",
                    "user",
                    "username",
                    "useracctid",
                    "undefined",
                    "null",
                    "fuck",
                    "suck"
                ]
                // check if contains in prohibiteedArr
                let lVal = _.toLower(val)
                for (let item of prohibittedArr) {
                    if (lVal.indexOf(_.toLower(item)) != -1) {
                        return Dot("K2UEY4ddl", "The user ID contains invalid words, please avoid using {0}", item)
                    }
                }
            }
        },
        {
            type: "check-fn",
            name: "password",
            validateFn: async (val) => {
                if (val.length < 6) {
                    return Dot("8sVG1RXhx", "password should be at least 6 characters")
                }
            }
        },
        {
            type: "check-fn",
            name: "confirmPassword",
            validateFn: async (val) => {
                if (val !== formData.password) {
                    return Dot("Y-svpKvUz", "two passwords do not match")
                }
            }
        },
        {
            type: "check-fn",
            name: "invitationCode",
            validateFn: async (val) => {
                if (val.length > 0) {
                    let item = invitationCodeItem
                    if (!item) {
                        return Dot("8s1dX", "The invitation code does not exist in system, please check if there is a case sensitive issue.")
                    }
                    if (item.expiredAt < new Date()) {
                        return Dot("8saIR-LCjyChx", "Invitation code has expired")
                    }
                    if (item.useCount > item.maxUseCount) {
                        return Dot("8saIt5r5nGxwwChx", "Invitation code has been used up")
                    }
                    // all good
                } else {
                    return Dot("8s1R5nChx", "Invitation code is empty, this community is not open to public but limited to invited users.")
                }
            }
        },
        fn_verifyVCode()
    ]

    let validObj = await validateEachRuleInArr(rules, formData);
    if (validObj) {
        return validObj
    }

    if (formData.preview) {
        return {
            data: undefined
        };
    }

    let newUser = await daoRef.db.transaction(async () => {
        let newUser = await User.create({
            userAcctId: formData.userAcctId + '',
            password: formData.password + '',
            phoneNumber: formData.phoneNumber + '',
            invitationCode: formData.invitationCode + '',
            vcode: formData.vcode + '',
            role: 'user',
            status: 'newly-created',
            topicCount: 0,
            replyCount: 0,
        })

        await invitationCodeItem?.update({
            useCount: invitationCodeItem.useCount - 1
        })

        signInWithUserId(formData.userAcctId + '')

        return newUser
    })
    if (!newUser) {
        return {
            error: "create user failed"
        }
    }
    return {
        data: {
            newUser: newUser
        },
    }
}