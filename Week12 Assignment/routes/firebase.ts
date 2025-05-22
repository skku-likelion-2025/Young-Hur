import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwa7vKC-Au2TqPeGrRHkIIPbnGpnhrVu0",
  authDomain: "nwitter-reloaded-92dc7.firebaseapp.com",
  projectId: "nwitter-reloaded-92dc7",
  storageBucket: "nwitter-reloaded-92dc7.firebasestorage.app",
  messagingSenderId: "1096335785065",
  appId: "1:1096335785065:web:a379679c8316e53610f6f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);