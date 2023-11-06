import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { adminAuth } from "../firebase/firebase-admin-config";

export const createSession = async () => {
  const auth = headers().get("Authorization");
  const idToken = auth?.replace("Bearer ", "");

  // Check if id token exists
  if (!idToken) {
    return new NextResponse("No id token provided.", { status: 400 });
  }

  // Return token session to user.
  try {
    // Create user session in firebase.
    const expiresIn = 60 * 60 * 24 * 1000; // One day
    const session = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    });

    // Create session cookie.
    cookies().set({
      name: "session",
      value: session,
      maxAge: expiresIn,
    });

    return new NextResponse("Session created successfully.", { status: 201 });
  } catch (e) {
    return new NextResponse("Could not create session.", { status: 500 });
  }
};

export const getSession = async () => {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    return new NextResponse("Not logged in.", { status: 400 });
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(
      sessionCookie.value
    );

    return NextResponse.json(decodedClaims, { status: 200 });
  } catch (e) {
    return new NextResponse("Could not validate session.", { status: 500 });
  }
};
