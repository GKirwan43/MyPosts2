import { getSession } from "@/lib/backend/auth";
import { getUser } from "@/lib/backend/user";
import { NextResponse } from "next/server";

export async function GET() {
  // Get current user session.
  let session;

  try {
    session = await getSession();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 401 });
  }

  // Get user data from database.
  let user;

  try {
    user = await getUser(session.uid);
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }

  return NextResponse.json(user, { status: 200 });
}
