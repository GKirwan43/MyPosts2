import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

import { getCurrentUser } from "@/lib/backend/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("No user exists.");
    }

    return NextResponse.json(user, { status: 200 });
  } catch (e: any) {
    cookies().delete("session");
    return new NextResponse(e.message, { status: 401 });
  }
}
