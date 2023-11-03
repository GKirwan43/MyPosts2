import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJRQd98_u1cxK6rxUPXlHhxM10gRUKyH0",
    authDomain: "my-posts-64be9.firebaseapp.com",
    projectId: "my-posts-64be9",
    storageBucket: "my-posts-64be9.appspot.com",
    messagingSenderId: "8454967294",
    appId: "1:8454967294:web:999e0f5ffc9af2a0253aaf",
    measurementId: "G-87QRW1X3WH"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);