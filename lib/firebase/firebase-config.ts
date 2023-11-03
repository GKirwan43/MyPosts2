import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_MWzIVhaJbzlz4m6WSKll0TyKNS722M8",
  authDomain: "my-posts-246c7.firebaseapp.com",
  projectId: "my-posts-246c7",
  storageBucket: "my-posts-246c7.appspot.com",
  messagingSenderId: "1061264169767",
  appId: "1:1061264169767:web:ddb1e4c2e08fab70c2a702",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
