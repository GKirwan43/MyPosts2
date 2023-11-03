import { auth } from "@/lib/firebase/firebase-config";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";

export const createUser = async (values: SignUpFormValues) => {
  try {
    let account;

    try {
      account = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") {
        return {
          fieldErrors: {
            username: "",
            email: "Email already exists.",
            password: "",
            confirmPassword: "",
          },
        };
      }

      throw new Error("Could not create account with firebase.");
    }

    const idToken = await getIdToken(account.user, true);

    const res = await fetch("/api/user/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Could not create account with api.");
    }
  } catch (e: any) {
    return {
      fieldErrors: {
        username: " ",
        email: " ",
        password: " ",
        confirmPassword: "Could not create account.",
      },
    };
  }
};
