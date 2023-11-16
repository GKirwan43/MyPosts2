import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase-config";

const createUserInFirebase = async (username: string, email: string, password: string) => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredentials.user, { displayName: username });
};

export { createUserInFirebase };
