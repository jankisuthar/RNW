
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDzofY48IKJP9d_VjZYN4_vG8KWlV4Y9MI",
  authDomain: "redux-crud-fb68e.firebaseapp.com",
  databaseURL: "https://redux-crud-fb68e-default-rtdb.firebaseio.com",
  projectId: "redux-crud-fb68e",
  storageBucket: "redux-crud-fb68e.appspot.com",
  messagingSenderId: "539976460737",
  appId: "1:539976460737:web:427abbd89768e4be52e740",
  // databaseURL : "https://redux-crud-fb68e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const db = getDatabase(app);
export default firestore;