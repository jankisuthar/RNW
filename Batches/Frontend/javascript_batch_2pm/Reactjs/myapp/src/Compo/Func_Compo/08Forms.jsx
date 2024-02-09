import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function Forms(props) {
    const inref = useRef('');

    const [data,setdata]=useState('');

    // const Btnclck=()=>{
    //     console.log("Form Submitted");
    //     console.log(inref.current.value);
    //     if(inref.current.value == "")
    //     {
    //         alert("please enter value!");
    //         inref.current.focus();
    //     }
    // }

    const handleChnge=()=>{
        if(data == "")
        {
            alert("please enter value!");
        }
    }
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleChnge} action='#'>
                        <label>Name:</label>
                        {/* <input type="text" name='name' className='form-control' ref={inref}/> */}
                        <p>{data}</p>
                        <input type="text" name='name' className='form-control' value={data} onChange={(e)=>setdata(e.target.value)}/>
                        
                        <button type='submit' className='btn btn-primary mt-2' name='submit'>submit</button>
                    </form>
                </div>
            </div>
        </div>
      </>
    );
}


export default Forms;