// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const API = import.meta.env.VITE_ROOT_FIREBASE_API;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API,
  authDomain: "chefs-hunt-3be57.firebaseapp.com",
  projectId: "chefs-hunt-3be57",
  storageBucket: "chefs-hunt-3be57.appspot.com",
  messagingSenderId: "521815172457",
  appId: "1:521815172457:web:3639bd498cf830aa3149f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export default app;
