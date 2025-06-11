import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBkL0R_HBOAK8cXe62UfwNgmLaIALU3SlA",
  authDomain: "jsreact-73695.firebaseapp.com",
  projectId: "jsreact-73695",
  storageBucket: "jsreact-73695.firebasestorage.app",
  messagingSenderId: "494382291830",
  appId: "1:494382291830:web:34faeb8b11dcf88cf13857"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();