import { auth } from "@/lib/firebase/firebase-config";
import { useMantineColorScheme } from "@mantine/core";
import { signOut } from "firebase/auth";

export const logoutUser = async () => {
  signOut(auth);

  await fetch(`${process.env.URL}/api/auth?logout=true`, {
    method: "POST",
  });
};
