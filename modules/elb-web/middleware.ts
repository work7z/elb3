import { deleteCookie, getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Elb3AuthBody } from "./app/register/action/registerUser";
import dao from "./app/__CORE__/dao";
import { key_sessionGroup } from "./app/register/redis-types";
import { header_ELB3_auth } from "./app/register/web-types";
import { getSignatureFromStr } from "./app/register/action/auth";
import _ from "lodash";

export function middleware(request: NextRequest) {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
  // let res = new NextResponse();
  // let elb3AuthStr = getCookie(header_ELB3_auth, { req, res });
  // if (!_.isEmpty(elb3AuthStr)) {
  //   try {
  //     let [expiredTS, body, singature] = elb3AuthStr?.split(".") as string[];
  //     let crtTime = new Date();
  //     if (crtTime.getTime() > parseInt(expiredTS)) {
  //       throw new Error("expired");
  //     }
  //     let c_sig = getSignatureFromStr(body);
  //     // if (c_sig != singature) {
  //     //   throw new Error("signature not match");
  //     // }
  //   } catch (e) {
  //     // unable to decode, meaning it is not a valid elb3-auth
  //     console.log("decode error", e);
  //     deleteCookie(header_ELB3_auth, { res, req });
  //     // if they have elb3-auth, but it is not valid, then we should remove it and redirect the user to /login
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }
  // } else {
  //   // pass through
  // }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
