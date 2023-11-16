import { adminAuth } from "@/lib/firebase/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get username and email from body of the request.
    const { username, email } = await req.json();

    // Return succsessful message.
    return NextResponse.json({ message: "User created successfully." }, { status: 201 });
  } catch (e: any) {
    // An error occured, return an error message.
    return NextResponse.json({ message: "Could not create user.", error: e.message }, { status: 500 });
  }
}
