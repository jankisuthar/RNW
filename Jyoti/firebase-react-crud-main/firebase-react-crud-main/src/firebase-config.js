import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwsiqFzjdpxoX3dIMjO2UILOVtsKVntH0",
  authDomain: "school-9e048.firebaseapp.com",
  projectId: "school-9e048",
  storageBucket: "school-9e048.appspot.com",
  messagingSenderId: "784967026294",
  appId: "1:784967026294:web:3f4add34851c875fe3c157",
  measurementId: "G-W1BBNSW3ZN"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
