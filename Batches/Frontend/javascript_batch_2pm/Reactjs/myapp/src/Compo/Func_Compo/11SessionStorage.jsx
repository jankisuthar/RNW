import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function SessionStorage(props) {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        var counterview=sessionStorage.getItem("counterview");
        if(counterview==null)
        {
            counterview=1;
        }
        else{
            counterview=Number(counterview)+1;
        }
        sessionStorage.setItem("counterview",counterview);
        // setCount(counterview);
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{count}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SessionStorage;