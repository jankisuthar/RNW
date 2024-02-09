// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGu4_DHMGdybCZvSisepeTpkCXpVn0iBs",
  authDomain: "trainee-firebase.firebaseapp.com",
  projectId: "trainee-firebase",
  storageBucket: "trainee-firebase.appspot.com",
  messagingSenderId: "534083186732",
  appId: "1:534083186732:web:1e09255bf370834484a189",
  databaseURL : "https://trainee-firebase-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app;