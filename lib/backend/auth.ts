import { cookies, headers } from "next/headers";
import { adminAuth } from "../firebase/firebase-admin-config";
import { getUser } from "./user";

export const createSession = async () => {
  const auth = headers().get("Authorization");
  const idToken = auth?.replace("Bearer ", "");

  // Check if id token exists
  if (!idToken) {
    throw new Error("No Id Token provided.");
  }

  // Return token session to user.
  try {
    // Check if user is in database.
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const user = await getUser(decodedToken.uid);

    if (!user) {
      throw new Error("Could not find user in database.");
    }

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
  } catch (e) {
    throw new Error("Could not create session.");
  }
};

export const getSession = async () => {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    throw new Error("Not logged in.");
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(
      sessionCookie.value
    );

    return decodedClaims;
  } catch (e) {
    throw new Error("Could not validate session.");
  }
};
