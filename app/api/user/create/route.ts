import { createSession } from "@/lib/backend/auth";
import { adminAuth } from "@/lib/firebase/firebase-admin-config";
import connectToDB from "@/lib/mongoose/db";
import User from "@/lib/mongoose/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
  const data = await res.json();

  // Connect to database.
  try {
    await connectToDB();
  } catch (e) {
    return new NextResponse("Could not connect to database.", { status: 500 });
  }

  // Create user in firebase and database.
  try {
    // Check if there is an exsiting user, if there is then send back the appropiate responses
    const existingUser = await User.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });

    if (existingUser) {
      let errors = {};

      if (existingUser.username === data.username) {
        errors = { ...errors, username: "Username already exists." };
      }
      if (existingUser.email === data.email) {
        errors = { ...errors, email: "Email already exists." };
      }

      return NextResponse.json({ fieldErrors: errors }, { status: 400 });
    }

    const firebaseUser = await adminAuth.createUser({
      displayName: data.username,
      email: data.email,
    });

    const token = await adminAuth.createCustomToken(firebaseUser.uid);

    const newUser = new User({
      uid: firebaseUser.uid,
      username: data.username,
      email: data.email,
    });

    await newUser.save();

    return NextResponse.json(
      { token },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    return new NextResponse("Could not create user in database.", {
      status: 500,
    });
  }
}
