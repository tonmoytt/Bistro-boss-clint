// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByUpKVNx0G5oS7szDso5pntfQA5EVSLqY",
  authDomain: "bistro-boss-2025-25269.firebaseapp.com",
  projectId: "bistro-boss-2025-25269",
  storageBucket: "bistro-boss-2025-25269.firebasestorage.app",
  messagingSenderId: "427805446468",
  appId: "1:427805446468:web:48b4551408368c0b838711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;