'use server'

import { getImgBase64Result, } from "@/app/api/captcha/route";
import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
import { cookies, headers } from 'next/headers';
import _ from "lodash";
import { InvitationCode, User, UserRole, UserToken } from "@/app/__CORE__/dao/model";
import { randomUUID } from "crypto";
import { header_ELB3_auth } from "@/app/register/web-types";
import { redirect, usePathname } from "next/navigation";
import { getSignatureFromStr } from "@/app/register/action/auth";
import { Elb3AuthBody, getUserInfoByUserAcctId } from "@/app/register/action/registerUser";

let getPathnameInRSC = () => {
    const headersList = headers();
    // read the custom x-url header
    const header_url = headersList.get('x-url') || "";
    return header_url
}

export let redirectToLoginPage = () => {
    let pathname = getPathnameInRSC()
    let permitted = pathname.startsWith("/login") || pathname.startsWith("/register")
    // no need to redirect to login page
}

export type AuthInfo = {
    currentUser: User | null,
    signedIn: boolean,
    furtherUserDetail?: {
        userRole: UserRole,
    }
}

export default async (): Promise<AuthInfo> => {
    let elb3AuthStr = getCookie(header_ELB3_auth, { cookies });
    if (!_.isEmpty(elb3AuthStr)) {
        try {
            let [expiredTS, body, singature, version] = elb3AuthStr?.split(".") as string[];
            let crtTime = new Date();
            if (crtTime.getTime() > parseInt(expiredTS)) {
                throw new Error("expired");
            }
            let c_sig = getSignatureFromStr(body);
            if (c_sig != singature) {
                throw new Error("signature not match");
            }
            let push: Elb3AuthBody = JSON.parse(atob(body))
            let userInfo = await getUserInfoByUserAcctId(push.userAcctId)
            return {
                currentUser: userInfo,
                signedIn: userInfo != null
            }
        } catch (e) {
            // unable to decode, meaning it is not a valid elb3-auth
            console.log("decode error", e);
            // if they have elb3-auth, but it is not valid, then we should remove it and redirect the user to /login
            redirectToLoginPage()
        }
    } else {
        // pass through
    }
    return {
        currentUser: null,
        signedIn: false
    }
}