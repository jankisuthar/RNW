import React, { useRef } from 'react';

function UseRef(props) {
    const myref = useRef("")

    const Btnclk=()=>{
        console.log("clicked");
        console.log(myref.current.value)
        if(myref.current.value == "")
        {
            alert("Please Enter Data!") 
        }
    }
    return (
       <>
       <div className="container mt-5">
        <div className="row">
            <div className="col">
                <input type="text"  id='inpt' ref={myref}/>
                <button className='btn btn-primary' onClick={Btnclk}>Click me</button>
                
            </div>
        </div>
       </div>
       </>
    );
}

export default UseRef;