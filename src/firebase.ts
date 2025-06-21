import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-87GwiTIAZbLyB5GKszi-Vfm_4RRLoA",
  authDomain: "personal-website-438417.firebaseapp.com",
  projectId: "personal-website-438417",
  storageBucket: "personal-website-438417.firebasestorage.app",
  messagingSenderId: "966077843295",
  appId: "1:966077843295:web:f8976da9e066e506b518ea",
  measurementId: "G-E589QLVBYG",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// ✅ Enable persistent login using local storage
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set Firebase Auth persistence:", error);
});

export { auth, db, provider };

