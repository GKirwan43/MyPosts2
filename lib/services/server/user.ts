"use server";

import { revalidateTag } from "next/cache";
import { cookies, headers } from "next/headers";

const appUrl = process.env.URL;

const getUser = async () => {
  const res = await fetch(`${appUrl}/api/user`, {
    method: "GET",
    headers: { Cookie: cookies().toString() },
    next: { tags: ["user"] },
  });

  if (!res.ok) {
    return;
  }

  return await res.json();
};

const updateUser = async (updatedUser: User) => {
  const res = await fetch(`${appUrl}/api/user/update`, {
    method: "POST",
    headers: { Cookie: cookies().toString() },
    body: JSON.stringify(updatedUser),
  });

  if (!res.ok) {
    throw new Error("Could not update user.");
  }

  revalidateUser();
};

const revalidateUser = async () => {
  revalidateTag("user");
};

export { getUser, updateUser, revalidateUser };
