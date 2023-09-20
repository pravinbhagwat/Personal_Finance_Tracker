import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI75NfcSSF3qTCJhyQU95xHLB8oOUMQj8",
  authDomain: "personal-finance-tracker-18b60.firebaseapp.com",
  projectId: "personal-finance-tracker-18b60",
  storageBucket: "personal-finance-tracker-18b60.appspot.com",
  messagingSenderId: "895554635166",
  appId: "1:895554635166:web:284f410fdb7ab8b2a9c28f",
  measurementId: "G-V0K5WPXLHP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
