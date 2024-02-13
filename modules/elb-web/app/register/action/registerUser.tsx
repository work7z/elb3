'use server'

import { getImgBase64Result } from "@/app/api/captcha/route";
import dao from "../../__CORE__/dao";
import { Dot } from "../../__CORE__/utils/TranslationUtils";
import { AsyncCreateResponse, CheckRules, fn_verifyVCode, validateEachRuleInArr } from "../action-types";
import { setCookie, getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import _ from "lodash";


export default async function create(formData: {
    username?: string,
    password?: string,
    phoneNumber?: string,
    confirmPassword?: string,
    vcode?: string
}): Promise<AsyncCreateResponse> {
    let daoRef = await dao()
    let rules: CheckRules[] = [
        {
            type: "non-empty",
            name: "username",
            label: Dot("RfqYACPtV", "Username"),
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
        fn_verifyVCode()
    ]

    let validObj = await validateEachRuleInArr(rules, formData);
    if (validObj) {
        return validObj
    }

    const rawFormData = {
        ...formData
    };
    let dbref = await dao()
    console.log(rawFormData);
    return {
        message: 'this is new item'
    }
}