import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase-config";

export const loginUserInFirebase = async (email: string, password: string) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredentials.user.getIdToken();
};

export const createUserInFirebase = async (
  username: string,
  email: string,
  password: string
) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await updateProfile(userCredentials.user, { displayName: username });
  return userCredentials.user.getIdToken();
};
