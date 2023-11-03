import { adminAuth } from "@/lib/firebase/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const auth = headers().get("Authorization");
  const idToken = auth?.replace("Bearer ", "");

  // Check to see if token was sent.
  if (!idToken) {
    return new NextResponse("No id token provided.", { status: 400 });
  }

  // Create account in database and return token session to user.
  try {
    // Create user session in firebase.
    const expiresIn = 60 * 60 * 24 * 1000; // One day
    const session = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Create user in database

    // Create session cookie.
    cookies().set({
      name: "session",
      value: session,
      maxAge: expiresIn,
    });

    return new NextResponse("Account created successfully.", { status: 201 });
  } catch (e) {
    return new NextResponse("Could not create account.", { status: 500 });
  }
}
