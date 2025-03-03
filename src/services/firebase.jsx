// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgRTpC0szJCSGvObhKtAQ7SuXTOmDAm1Y",
  authDomain: "yachipacitos-ecommerce.firebaseapp.com",
  projectId: "yachipacitos-ecommerce",
  storageBucket: "yachipacitos-ecommerce.firebasestorage.app",
  messagingSenderId: "231322315454",
  appId: "1:231322315454:web:187f8234a11d9b68ee8cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)