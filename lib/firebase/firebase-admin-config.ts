import {
  initializeApp,
  getApp,
  getApps,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
  } as ServiceAccount),
};

export default function initializeAndGetApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }

  return getApp();
}

export const adminAuth = getAuth(initializeAndGetApp());
