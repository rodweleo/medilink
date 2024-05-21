import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUlRV3xeiNmBtqX0zKUZxfWAiaFj3JowI",
  authDomain: "mediflow254.firebaseapp.com",
  projectId: "mediflow254",
  storageBucket: "mediflow254.appspot.com",
  messagingSenderId: "1037316609706",
  appId: "1:1037316609706:web:51c1d597b72ff728be62d3",
  measurementId: "G-VLMGT4088W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);