// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjG3wrFxEZZnBosIbKApUWe8J1fGYZaFE",
  authDomain: "imaginers-stg.firebaseapp.com",
  databaseURL: "https://imaginers-stg-default-rtdb.firebaseio.com",
  projectId: "imaginers-stg",
  storageBucket: "imaginers-stg.appspot.com",
  messagingSenderId: "861138328166",
  appId: "1:861138328166:web:0837104bf76c0988ceaba7",
  measurementId: "G-FZLY073DH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);