'use server'

import dao from "../__CORE__/dao";
import { AsyncCreateResponse, CheckRules, validateEachRuleInArr } from "./action-types";

export default async function create(formData: {
    username?: string,
    password?: string,
    email?: string,
    confirmPassword?: string,
    vcode?: string
}): Promise<AsyncCreateResponse> {
    let rules: CheckRules[] = [
        {
            type: "non-empty",
            name: "username"
        },
        {
            type: "non-empty",
            name: "password"
        },
        {
            type: "non-empty",
            name: "email"
        },
        {
            type: "non-empty",
            name: "confirmPassword"
        },
        {
            type: "non-empty",
            name: "vcode"
        },
        {
            type: "valid-email",
            name: "email"
        },
        {
            type: "check-fn",
            name: "password",
            validateFn: (val) => {
                if (val.length < 6) {
                    return "password should be at least 6 characters"
                }
            }
        },
        {
            type: "check-fn",
            name: "confirmPassword",
            validateFn: (val) => {
                if (val !== formData.password) {
                    return "password not match"
                }
            }
        }
    ]

    let validObj = validateEachRuleInArr(rules, formData);
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