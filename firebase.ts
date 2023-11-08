import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyALg67u_hkMLptj50d4E9EZnNzfZBcn0Uo",
    authDomain: "saas-translator-app-ca3a5.firebaseapp.com",
    projectId: "saas-translator-app-ca3a5",
    storageBucket: "saas-translator-app-ca3a5.appspot.com",
    messagingSenderId: "279383547918",
    appId: "1:279383547918:web:c36451812829ef589f5c5f",
    measurementId: "G-W337PDT19L"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };