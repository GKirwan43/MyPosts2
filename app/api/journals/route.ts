import { getSession } from "@/lib/backend/auth";
import connectToDB from "@/lib/mongoose/db";
import Journal from "@/lib/mongoose/models/Journal";
import { NextResponse } from "next/server";

export async function GET() {
  let session;

  try {
    session = await getSession();
    await connectToDB();
  } catch (e: any) {
    return new NextResponse(e.message, { status: 401 });
  }

  try {
    const journals = await Journal.find({ uid: session.uid });
    const mappedJournal = journals.map((journal) => ({
      id: journal.id,
      title: journal.title,
      description: journal.description,
    }));

    return NextResponse.json(mappedJournal, { status: 200 });
  } catch (e) {
    return new NextResponse("Could not get journals.", { status: 500 });
  }
}
