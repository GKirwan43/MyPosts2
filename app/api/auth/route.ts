import { createSession, getSession } from "@/lib/backend/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await getSession();
    return new NextResponse("Session valid.", { status: 200 })
  } catch (e: any) {
    return new NextResponse(e.message, { status: 401 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const logout = searchParams.get("logout");
  
    // Logout is session cookie exists.
    const sessionCookie = cookies().get("session");
    if (sessionCookie) {
      cookies().delete("session");
  
      if (logout) {
        return new NextResponse("User logged out successfully.", { status: 200 });
      }
    }
  
    await createSession();
    return new NextResponse("Session created successfully.", { status: 200 });
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }
}
