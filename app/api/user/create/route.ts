import { createSession, getIdToken } from "@/lib/backend/auth";
import { adminAuth } from "@/lib/firebase/firebase-admin-config";
import connectToDB from "@/lib/mongoose/db";
import User from "@/lib/mongoose/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get id token from user's request.
    const idToken = getIdToken();
    if (!idToken) {
      return NextResponse.json(
        { message: "ID Token was not sent in headers." },
        { status: 400 }
      );
    }

    // Get user from id token.
    const uid = await adminAuth
      .verifyIdToken(idToken)
      .then((user) => user.uid)
      .catch(() => null);
    if (!uid) {
      return NextResponse.json(
        { message: "Invalid ID token." },
        { status: 401 }
      );
    }

    // Get username and email of user from firebase auth.
    const { displayName: username, email } = await adminAuth.getUser(uid);

    // Connect to database.
    await connectToDB();

    // Create user in database.
    const newUser = new User({ uid, username, email });
    await newUser.save();

    // Create user session.
    await createSession(idToken);

    // Return succsessful message.
    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (e: any) {
    // An error occured, return an error message.
    return NextResponse.json(
      { message: "Could not create user.", error: e.message },
      { status: 500 }
    );
  }
}
