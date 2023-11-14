import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Links } from "./lib/utils/contants";

const loggedOutPaths = [Links.home, Links.signup, Links.login];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const validSession = await fetch(`${process.env.BACKEND_URL}/api/user`, {
    headers: { Cookie: req.cookies.toString() },
  }).then((res) => res.ok);

  // Redirections based on path
  if (loggedOutPaths.includes(pathname)) {
    if (validSession) {
      return NextResponse.redirect(new URL(Links.dashboard, req.url));
    }
  } else if (pathname.startsWith(Links.dashboard)) {
    if (!validSession) {
      return NextResponse.redirect(new URL(Links.login, req.url));
    }
  }
}
