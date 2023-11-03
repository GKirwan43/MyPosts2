import { auth } from "@/lib/firebase/firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const createUser = async (values: SignUpFormValues) => {
    // Try and create firebase account.
    try {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    } catch (e: any) {
        throw new Error(e.code)
    }
}