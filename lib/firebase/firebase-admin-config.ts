import * as admin from "firebase-admin";
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import serviceAccountJson from '@/lib/firebase/service-account.json'
import { getAuth } from "firebase-admin/auth";

const serviceAccount = serviceAccountJson as admin.ServiceAccount;

const firebaseAdminConfig = {
    credential: cert(serviceAccount)
}
const adminApp =
  getApps().length <= 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];

export const adminAuth = getAuth(adminApp);