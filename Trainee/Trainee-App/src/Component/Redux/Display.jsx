import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
    const data=useSelector((store)=>store)
    return (
        <div>
        <p>{data.map((el,i)=>{
            return <li>{el}</li>
        })}</p>
        </div>
    );
}

export default Display;