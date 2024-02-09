import React from 'react';
import { useState } from 'react';
// import db from '../firebase/firebase.js'
// import {ref,set} from "firebase/database"


function AddData(props) {

    const [userData,setUserData] = useState({
                fname: "",
                email:"",
                password: "",
    });

    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;  
      setUserData({ ...userData, [name]: value });
    };
            
    const submitData = async (event) => {
        event.preventDefault();
        const { fname,email,password } = userData;
    
        if (fname && email && password) {
          const res = fetch(
            "https://redux-crud-fb68e-default-rtdb.firebaseio.com/UsetData.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                fname,
                email,
                password,
              }),
            }
          );
    
          if (res) {
            setUserData({
             fname,
             email,
             password,
            });
            alert("Data Stored");
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [passwod, setPassword] = useState("");

   
        // const Push=async()=>{   
        //     set(ref(db,'users/'),{
                
        //         name: name,
        //         email:email,
        //         password: passwod,
        //      })
        //      setName("")
        //      setEmail("")
        //      setPassword("")
        //   }
      
    
 
    return (
        <>            
        <div className="container">
                <form method='post'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  value={userData.fname} onChange={postUserData} name='fname'/>
                    <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" value={userData.email} onChange={postUserData} name='email'/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={userData.password} onChange={postUserData} name='password'/>
                </div>

                <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>
                </form>
            
        </div>
        </>

    );
}

export default AddData;