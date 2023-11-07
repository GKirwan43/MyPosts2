import { headers } from "next/headers";

const appUrl = process.env.URL;

const getUser = async () => {
  const res = await fetch(`${appUrl}/api/user`, {
    method: "GET",
    headers: headers(),
    next: { tags: ["session"] },
  });

  if (!res.ok) {
    throw new Error("Could not fetch user.");
  }

  return await res.json();
};

export { getUser };
