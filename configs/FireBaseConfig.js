// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCydsTEPjOaHNJ5W2pRMKPnz0qsgaXero",
  authDomain: "swap-223d6.firebaseapp.com",
  projectId: "swap-223d6",
  storageBucket: "swap-223d6.appspot.com",
  messagingSenderId: "1048265966661",
  appId: "1:1048265966661:web:050ddbac2434a216868f2c",
  measurementId: "G-RQPQWRKRPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);