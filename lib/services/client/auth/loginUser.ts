import { auth } from "@/lib/firebase/firebase-config";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { revalidateUser } from "../../server/user";

export const loginUser = async (values: LoginFormValues) => {
  try {
    let account;

    try {
      account = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
    } catch (e: any) {
      if (e.code === "auth/invalid-login-credentials") {
        return {
          fieldErrors: {
            email: " ",
            password: "Incorrect email or password.",
          },
        };
      }

      throw new Error("Could not log into account with firebase.");
    }

    const idToken = await getIdToken(account.user, true);

    const res = await fetch(`${process.env.URL}/api/auth`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Could not create session with api.");
    }

    await revalidateUser();
  } catch (e) {
    return {
      fieldErrors: {
        email: " ",
        password: "Could not login user.",
      },
    };
  }
};
