import {
  initializeApp,
  getApp,
  getApps,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  credential: cert(process.env.FIREBASE_SECRET_KEY as ServiceAccount),
};

export default function initializeAndGetApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }

  return getApp();
}

export const adminAuth = getAuth(initializeAndGetApp());
