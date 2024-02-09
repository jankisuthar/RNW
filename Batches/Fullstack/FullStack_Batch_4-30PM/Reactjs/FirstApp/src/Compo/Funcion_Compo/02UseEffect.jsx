import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect(props) {
    const [name,setName]=useState("John")
    const [counter,setCounter]=useState({count:0})

   

    useEffect(()=>{
        setInterval(() => {
            console.log("useEffect called");
        }, 2000);
       
    })
    const BtnClck=()=>{
        console.log("btn called");
        setName("John Doe")
        setCounter({count:counter.count+1})
    }

   
    return (
        <div>
           <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{name}</h1>
                    <h1>{counter.count}</h1>
                    <button className='btn btn-success' onClick={BtnClck}>Click</button>
                </div>
            </div>
           </div>
        </div>
    );
}

export default UseEffect;