// firebaseConfig.ts (or .js)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth

const firebaseConfig = {
    apiKey: "AIzaSyAnjlnw80nf1OdVOLHn6ayzJDtQ8RyhuzE",
    authDomain: "elderly-care-f1e6b.firebaseapp.com",
    projectId: "elderly-care-f1e6b",
    storageBucket: "elderly-care-f1e6b.firebasestorage.app",
    messagingSenderId: "854090680320",
    appId: "1:854090680320:web:72801485a469a9bab0b0e5",
    measurementId: "G-83M1056XPJ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth
export default app;