import { adminAuth } from "@/lib/firebase/firebase-admin-config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    return new NextResponse("Not logged in.", { status: 400 });
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(
      sessionCookie.value,
    );

    return NextResponse.json(decodedClaims, { status: 200 });
  } catch (e) {
    return new NextResponse("Could not validate session.", { status: 500 });
  }
}
