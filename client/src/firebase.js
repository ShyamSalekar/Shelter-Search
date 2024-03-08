// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sheltersearch-39197.firebaseapp.com",
  projectId: "sheltersearch-39197",
  storageBucket: "sheltersearch-39197.appspot.com",
  messagingSenderId: "304494148471",
  appId: "1:304494148471:web:2e1aecde1d2f180f9d7f72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);