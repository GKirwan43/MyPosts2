import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/backend/auth";
import connectToDB from "@/lib/mongoose/db";
import Journal from "@/lib/mongoose/models/Journal";
import { generateShortNumericId } from "@/lib/utils/ids";

export async function POST(req: NextRequest) {
  let session;

  try {
    session = await getSession();
    await connectToDB();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }

  let title;
  let description;

  try {
    const data = await req.json();
    title = data.title;
    description = data.description;

    if (!title) {
      throw new Error("Title not provided.");
    }
  } catch (e) {
    return new NextResponse("Title or description not provided.", {
      status: 400,
    });
  }

  try {
    const id = generateShortNumericId();

    const newJournal = new Journal({
      uid: session.uid,
      id,
      title,
      description,
    });

    await newJournal.save();

    return NextResponse.json(
      { message: "Journal created successfully.", id },
      { status: 201 }
    );
  } catch (e) {
    return new NextResponse("Could not create journal.", { status: 500 });
  }
}
