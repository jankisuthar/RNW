import React from 'react';
import { useState } from 'react';
import Previous from './13Previous'

function UseState(props) {

    const[name,setName] = useState('');
    const[age,setAge] = useState('');

    const BtnClck=()=>{
        console.log("btn called");
        setName("My Name is Red & White Multimedia!");
        setAge("and age is 3 months");
    } 
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>{name}</h1>
                        <h3>{age}</h3>
                            <button className='btn btn-success' onClick={BtnClck}>What's your name?</button>
                    </div>
                </div>
            </div>
            <Previous/>
        </>
    );
}

export default UseState;