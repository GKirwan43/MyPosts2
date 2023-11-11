import { getSession } from "@/lib/backend/auth";
import Journal from "@/lib/mongoose/models/Journal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let uid;

  try {
    uid = await getSession().then((res) => res.uid);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 });
  }

  let id;

  try {
    const searchParams = req.nextUrl.searchParams;
    id = searchParams.get("id");

    if (!id) {
      throw new Error("No journal ID provided.");
    }
  } catch (e) {
    return NextResponse.json(
      { error: "No journal ID provided." },
      { status: 400 }
    );
  }

  try {
    const journal = await Journal.findOne({ uid, id });

    if (!journal) {
      return NextResponse.json(
        { error: "Journal not found." },
        { status: 400 }
      );
    }

    return NextResponse.json(journal, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Could not get journal." },
      { status: 500 }
    );
  }
}
