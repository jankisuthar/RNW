import React from 'react';
import { useState } from 'react';

function Controlled_Compo(props) {
    const [Name,setName]=useState("")

    const Btnclk=(e)=>{
       alert(Name)
    }
    return (
       <>
        <div className="container mt-5">
        <div className="row">
            <div className="col">
                <input type="text"  value={Name} onChange={(e)=>setName(e.target.value)}/>
                <button className='btn btn-primary' onClick={Btnclk}>Click me</button>
                
            </div>
        </div>
       </div>
       </>
    )
}

export default Controlled_Compo;