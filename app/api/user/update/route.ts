import { getSession } from "@/lib/backend/auth";
import { getUser } from "@/lib/backend/user";
import connectToDB from "@/lib/mongoose/db";
import User from "@/lib/mongoose/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let session;

  try {
    session = await getSession();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 401 });
  }

  try {
    const data = await req.json();
    const settings = data.settings;

    await User.findOneAndUpdate(
      { uid: session.uid },
      { $set: { "settings.darkMode": settings.darkMode } }
    );
  } catch (e) {
    return new NextResponse("Could not update user.", { status: 500 });
  }

  return new NextResponse("User updated successfully.", { status: 200 });
}
