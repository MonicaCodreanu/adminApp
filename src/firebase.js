// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminapp-d13df.firebaseapp.com",
  projectId: "adminapp-d13df",
  storageBucket: "adminapp-d13df.appspot.com",
  messagingSenderId: "282059688620",
  appId: "1:282059688620:web:f0d7ee2d70fab356fc6d09",
  measurementId: "G-Z74EQ4HRTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

//process.env.REACT_APP_FIREBASE_KEY
// apiKey: "AIzaSyCFjGWy_2kpwm-2D7ZickQLTXjDpG-7NXQ",
