"use server";

import { Links } from "@/lib/utils/contants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const appUrl = process.env.URL;

const getJournal = async (id: string) => {
  const res = await fetch(`${appUrl}/api/journal?id=${id}`, {
    method: "GET",
    headers: { Cookie: cookies().toString() },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }

  return data;
};

const getJournals = async () => {
  const res = await fetch(`${appUrl}/api/journals`, {
    method: "GET",
    headers: { Cookie: cookies().toString() },
  });

  if (!res.ok) {
    throw new Error("Could not get journals.");
  }

  return await res.json();
};

const createJournal = async (journal: Journal) => {
  const res = await fetch(`${appUrl}/api/journal/create`, {
    method: "POST",
    headers: { Cookie: cookies().toString() },
    body: JSON.stringify(journal),
  });

  if (!res.ok) {
    throw new Error("Could not create journal.");
  }

  const data = await res.json();
  const id = data.id;

  revalidateTag("journals");

  redirect(`${Links.journal}/${id}`);
};

export { getJournal, getJournals, createJournal };
