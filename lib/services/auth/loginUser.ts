import { auth } from "@/lib/firebase/firebase-config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const loginUser = async (values: SignUpFormValues) => {
    // Try and login to firebase account.
    try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    } catch (e: any) {
        throw new Error(e.code)
    }
}