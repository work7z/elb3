import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("lol!!!");
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
