import { getSession } from "@/lib/backend/auth";
import { getJournal } from "@/lib/backend/journal";
import Journal from "@/lib/mongoose/models/Journal";
import JournalPost from "@/lib/mongoose/models/JournalPost";
import { generateShortNumericId } from "@/lib/utils/ids";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const uid = session.uid;

    const data = await req.json();
    const { journalId, title, post } = data;

    if (!journalId || !title || !post) {
      throw new Error("Journal ID, title, or post was not provided.");
    }

    const journal = await getJournal(uid, journalId);

    if (!journal) {
      throw new Error("Journal does not exist.");
    }

    const id = generateShortNumericId();

    const newPost = new JournalPost({
      id,
      uid,
      title,
      post,
    });

    await newPost.save();

    await Journal.findOneAndUpdate({ id: journalId }, { $push: { posts: id } });

    return NextResponse.json(
      { message: "Journal post created successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    let status = 500;

    if (error.message === "Journal ID, title, or post was not provided.") {
      status = 400;
    } else if (error.message === "Journal not found.") {
      status = 404;
    } else if (error.message.startsWith("Authentication error")) {
      status = 401;
    }

    return NextResponse.json({ error: error.message }, { status });
  }
}
