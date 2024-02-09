import React from 'react';
import { useState } from 'react';

function Intro(props) {
    const[name,setName] = useState("");
    const[age,setAge] = useState(3);


    const BtnClck=()=>{    
        console.log("btn called");
        setName('Red & White');
        setAge(5);  
    }
    return (
        <>
        <div className="container">
            <h1>Welcome to Function Component</h1>
            <br />
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
          <button className='btn btn-primary' onClick={BtnClck}>Click me</button>
          </div>
        </>
    );
}

export default Intro;