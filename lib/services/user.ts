import { createUserInFirebase, loginUserInFirebase } from "../firebase/auth";

export const loginUser = async (email: string, password: string) => {
  // Log in user in firebase auth and get id token.
  const idToken = await loginUserInFirebase(email, password);

  // Create session.
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  // Throw error if response is not ok.
  if (!res.ok) {
    throw new Error(res.statusText);
  }
};

export const signUpUser = async (
  username: string,
  email: string,
  password: string
) => {
  // Create user in firebase auth and get id token.
  const idToken = await createUserInFirebase(username, email, password);

  // Create user in database.
  const res = await fetch("/api/user/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      username,
      email,
    }),
  });

  // Throw error if response is not ok.
  if (!res.ok) {
    throw new Error(res.statusText);
  }
};
