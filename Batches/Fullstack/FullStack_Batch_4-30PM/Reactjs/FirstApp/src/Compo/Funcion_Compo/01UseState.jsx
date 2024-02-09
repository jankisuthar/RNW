import React from 'react';
import { useState } from 'react';

function UseState(props) {

    const [name,setName] = useState("")
    const [age,setAge] = useState()

    const BtnClck=()=>{
        console.log("Btn called");
        setAge(45)
        setName("John Doe")
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{name}</h1>
                    <h1>{age}</h1>
                    <button className='btn btn-primary' onClick={BtnClck}>Click me to See my Info</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default UseState;