import React, { useEffect } from 'react';
import { useState } from 'react';

function UseEffect(props) {
    const[data,setData] = useState({counter:0});


    useEffect(()=>{
        setTimeout(() => {
            console.log("useEffect called");
            fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 2000);
       
    },[])

    const BtnClck=()=>{
        console.log("btn called");
        setData({counter:data.counter+1});   
    }
    return (
       <>
        <div className="container">
            <div className="row">
                <div className="col">
                        <h1>{data.counter}</h1>
                        <button className='btn btn-primary' onClick={BtnClck}>Increment</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default UseEffect;