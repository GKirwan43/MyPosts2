import { createSession, getSession } from "@/lib/backend/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return getSession();
}

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const logout = searchParams.get("logout");

  // Logout is session cookie exists.
  const sessionCookie = cookies().get("session");
  if (sessionCookie) {
    cookies().delete("session");

    if (logout) {
      return new NextResponse("User logged out successfully", { status: 200 });
    }
  }

  // If no session cookie exists, log the user in.
  return createSession();
}
