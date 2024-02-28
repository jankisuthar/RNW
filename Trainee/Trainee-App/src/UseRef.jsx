import React, { useRef } from 'react';
import './style.css'

function UseRef(props) {
    const ref = useRef()
    console.log(ref);
    function Update(){
        console.log(ref.current);
        console.log(ref.current.value);
        ref.current.classList.add("green")
        ref.current.classList.remove("red")
    }
    function input(){
        // ref.current.style.color = "Red";
        // ref.current.style.backgroundColor = "blue";
    }
    return (
        <div>
            {/* useRef.useReducer,useEffect */}
            <h1>useRef</h1>
            <input type="text" ref={ref} onChange={input} className="red"/>
            <button onClick={Update}>Click Me</button>
        </div>
    );
}

export default UseRef;