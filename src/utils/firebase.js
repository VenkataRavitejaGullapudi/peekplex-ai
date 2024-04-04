// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZomSHsD5bRVedPi7xkmjd1cMXMRp4cE",
  authDomain: "ravi-netflix-gpt.firebaseapp.com",
  projectId: "ravi-netflix-gpt",
  storageBucket: "ravi-netflix-gpt.appspot.com",
  messagingSenderId: "1099355260763",
  appId: "1:1099355260763:web:4422f96f3a479ce6fe7c7e",
  measurementId: "G-MK0ZTZ8DPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth()