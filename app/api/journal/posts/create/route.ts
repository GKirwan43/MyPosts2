import { getSession } from "@/lib/backend/auth";
import Journal from "@/lib/mongoose/models/Journal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let uid;

  try {
    const session = await getSession();
    uid = session.uid;
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 });
  }

  let data;

  try {
    data = await req.json();

    if (!data.journalId || !data.title || !data.post) {
      throw new Error("Journal ID, title, or post was not provided.");
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }

  const { journalId, title, post } = data;

  try {
    const journal = await Journal.findOne({ id: journalId, uid });

    if (!journal) {
      throw new Error("Journal does not exist.");
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 404 });
  }

  try {
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 404 });
  }
}
