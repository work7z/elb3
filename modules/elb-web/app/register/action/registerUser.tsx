'use server'

import { getImgBase64Result } from "@/app/api/captcha/route";
import dao from "../../__CORE__/dao";
import { Dot } from "../../__CORE__/utils/TranslationUtils";
import { AsyncCreateResponse, CheckRules, fn_verifyVCode, validateEachRuleInArr } from "../action-types";
import { setCookie, getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import _ from "lodash";
import { InvitationCode, User } from "@/app/__CORE__/dao/model";


export let signInWithUserId = (userId: number) => {
    //
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