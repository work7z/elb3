import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("middlewared is called");
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
