// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-faa6e.firebaseapp.com",
  projectId: "mern-estate-faa6e",
  storageBucket: "mern-estate-faa6e.appspot.com",
  messagingSenderId: "947222086172",
  appId: "1:947222086172:web:cb5e8d20ee36742a25d5d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);