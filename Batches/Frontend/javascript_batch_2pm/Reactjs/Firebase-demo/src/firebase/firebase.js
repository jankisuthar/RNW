// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVkm3VUz1aC5gNLNcyFFOGH7W_KurY3HY",
  authDomain: "reactjs-1-30.firebaseapp.com",
  projectId: "reactjs-1-30",
  storageBucket: "reactjs-1-30.appspot.com",
  messagingSenderId: "592851280250",
  appId: "1:592851280250:web:30fbb1afcd045191f2f6c3",
  measurementId: "G-47SCRDTTKG",
  databaseURL:'https://reactjs-1-30-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

export const auth = getAuth();

const provider = new GoogleAuthProvider();

const SignInWithGoogle = ()=>{
  signInWithPopup(auth,provider).then((result)=>{
    // console.log(result);

    const name = result.user.displayName;
    const email = result.user.email;
    const photoURL = result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email); 
    localStorage.setItem("photoURL",photoURL);
    
  }).catch((error)=>{
    console.log(error);
  })
}
export default SignInWithGoogle;
