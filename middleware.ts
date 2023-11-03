import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "./lib/firebase/firebase-admin-config";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard",
};
