import { getSession } from "@/lib/backend/auth";
import connectToDB from "@/lib/mongoose/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }

  let user;

  try {
    user = await getSession();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 401 });
  }

  return NextResponse.json(user, { status: 200 });
}
