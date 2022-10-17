import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaBCtc6d1NDe2bcbdljRbYwApJY9Vnpms",
  authDomain: "rain-ebeaa.firebaseapp.com",
  projectId: "rain-ebeaa",
  storageBucket: "rain-ebeaa.appspot.com",
  messagingSenderId: "255888780310",
  appId: "1:255888780310:web:5dd672bf5589e07bde9937"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
