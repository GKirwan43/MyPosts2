import { auth } from "@/lib/firebase/firebase-config";
import { signInWithCustomToken, updatePassword } from "firebase/auth";
import { loginUser } from "./loginUser";

export const createUser = async (values: SignUpFormValues) => {
  try {
    const res = await fetch(`${process.env.URL}/api/user/create`, {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        email: values.email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 400) {
        return data;
      } else {
        throw new Error("Could not create account with api.");
      }
    }

    const userCredentials = await signInWithCustomToken(auth, data.token);
    const user = userCredentials.user;

    await updatePassword(user, values.password);

    await loginUser({ email: values.email, password: values.password });
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
