// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbZhPltACgnPSoWIIme-8Lm9vWV5b9CLo",
    authDomain: "canallastore-41d7b.firebaseapp.com",
    projectId: "canallastore-41d7b",
    storageBucket: "canallastore-41d7b.appspot.com",
    messagingSenderId: "672488649394",
    appId: "1:672488649394:web:1df4c0ba43c7f2e77f8fab"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);