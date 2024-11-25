import { initializeApp } from "firebase/app"; // Import initializeApp for Firebase setup
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwRrl05sgH6us-T53OcwBQUtRK38w4ems",
  authDomain: "physixtry-1cddc.firebaseapp.com",
  projectId: "physixtry-1cddc",
  storageBucket: "physixtry-1cddc.firebasestorage.app",
  messagingSenderId: "883768254252",
  appId: "1:883768254252:web:a3b105edf588d8b1be1689",
  measurementId: "G-J8C5CSGVFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);