import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { Links } from "./lib/utils/contants";

const loggedOutPaths = [Links.home, Links.signup, Links.login];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const sessionCookie = cookies().get("session");

  if (loggedOutPaths.includes(pathname)) {
    if (sessionCookie) {
      return NextResponse.redirect(new URL(Links.dashboard, request.url));
    }
  } else if (pathname.startsWith(Links.dashboard)) {
    if (!sessionCookie) {
      return NextResponse.redirect(new URL(Links.login, request.url));
    }
  }
}
