import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemo(props) {
    const[number,setNumber]=useState(1)

    const factorial = useMemo(()=>FactroialNumber(number));

    const onChange=(event)=>{
        setNumber(Number(event.target.value))
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <input type="number" value={number} onChange={onChange}/>
                        {factorial} 
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseMemo;
function FactroialNumber(n)
{
    return n<=0?1:n*FactroialNumber(n-1);
}