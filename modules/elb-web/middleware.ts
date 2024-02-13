import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Elb3AuthBody } from "./app/register/action/registerUser";
import dao from "./app/__CORE__/dao";
import { key_sessionGroup } from "./app/register/redis-types";

export async function middleware(req: NextRequest) {
  let res = new NextResponse();
  let elb3AuthStr = getCookie("elb3-auth", { req, res });
  let signedIn = false;
  try {
    let elb3AuthObj: Elb3AuthBody | null = null;
    if (elb3AuthStr) {
      elb3AuthObj = JSON.parse(decodeURIComponent(elb3AuthStr));
    }
    let { userAcctId, sessionVal } = elb3AuthObj || {};
    let daoRef = await dao();
    let sessionVal2 = await daoRef.redis.hGet(
      key_sessionGroup + ":" + userAcctId,
      "token"
    );
    if (sessionVal2 == sessionVal) {
      signedIn = true;
    }
  } catch (e) {
    // unable to decode, meaning it is not a valid elb3-auth
    console.log("decode error", e);
  }
  console.log("middlewared is called");
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
