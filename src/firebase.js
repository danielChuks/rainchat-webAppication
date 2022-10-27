import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqKbyWzM_jXXN8Ry5vQ6ews3sjrkXQRsI",
  authDomain: "chat-36b8e.firebaseapp.com",
  projectId: "chat-36b8e",
  storageBucket: "chat-36b8e.appspot.com",
  messagingSenderId: "297316209318",
  appId: "1:297316209318:web:6f567b9ac8604d52bd5a67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


