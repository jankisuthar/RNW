




import React from 'react';
import { useRef } from 'react';
import Previous from './13Previous'

function UseRef(props) {
    let ref = useRef(0);
    let inputref = useRef("")
    console.log(inputref.current);

    const Btnclck=()=>{
        // ref.current=ref.current+1;
        // alert("you have clicked "+ref.current+" times!");
        // inputref.current.focus();
        if(inputref.current.value == "")
        {
            console.log("please enter value!");
        }
    }
    return (
      <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <input type="text" ref={inputref} />
                    <button className='btn btn-primary' onClick={Btnclck}>Click</button>
                </div>
            </div>
        </div>
        <Previous/>
      </>
    );
}

export default UseRef;