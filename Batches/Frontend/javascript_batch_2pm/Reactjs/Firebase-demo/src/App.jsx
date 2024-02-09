import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import app from './firebase/firebase'
// import { getDatabase ,ref, set,get} from "firebase/database";
import SignInWithGoogle from './firebase/firebase'



function App() {
  // const db = getDatabase(app)

  // const createdata = ()=>{
  //   set(ref(db,'users/102'),{
  //     id:102,
  //     name:"angella",
  //     age:22,
  //     email:"angella@gmail.com"
  //   })}

  //   const GetData=()=>{
  //     get(ref(db,'users/')).then((res)=>{
  //       console.log(res.val());
  //     }) 
  //   }
  return(
    <>
      {/* <button onClick={createdata}>Create Data</button>
      <button onClick={GetData}>Get Data</button> */}
      <button onClick={SignInWithGoogle}>SignInWithGoogle</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("photoURL")} alt="" />
    </>
  )
}

export default App
