// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoi_rsrBc36TFhycnoD9RzwnugM5GggUg",
  authDomain: "peekplex-cf942.firebaseapp.com",
  projectId: "peekplex-cf942",
  storageBucket: "peekplex-cf942.appspot.com",
  messagingSenderId: "353397176481",
  appId: "1:353397176481:web:83071639f1a7bc71be98e0",
  measurementId: "G-ZZTX2LKXEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth()