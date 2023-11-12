import { getSession } from "@/lib/backend/auth";
import { getJournal } from "@/lib/backend/journal";
import JournalPost from "@/lib/mongoose/models/JournalPost";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    const uid = session.uid;

    const searchParams = req.nextUrl.searchParams;
    const journalId = searchParams.get("id");

    if (!journalId) {
      throw new Error("No journal ID provided.");
    }

    const journal = await getJournal(uid, journalId);

    if (!journal) {
      throw new Error("Journal not found in the database.");
    }

    const journalPosts = await JournalPost.find({
      id: { $in: journal.posts },
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json(journalPosts, { status: 200 });
  } catch (error: any) {
    let status = 500;

    if (error.message === "No journal ID provided.") {
      status = 400;
    } else if (error.message === "Journal not found in the database.") {
      status = 404;
    } else if (error.message.startsWith("Authentication error")) {
      status = 401;
    }

    return NextResponse.json({ error: error.message }, { status });
  }
}
