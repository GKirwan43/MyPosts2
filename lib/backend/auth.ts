import { cookies, headers } from "next/headers";
import { adminAuth } from "../firebase/firebase-admin-config";

export const getIdToken = () => {
  return headers().get("Authorization")?.replace("Bearer ", "");
};

export const createSession = async (idToken: string) => {
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn,
  });

  cookies().set("session", sessionCookie);
};
