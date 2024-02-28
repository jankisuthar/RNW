import React, { useRef, useState } from 'react';

function Timer(props) {
    const[timer,setTimer]=useState(0)
    var id=useRef()

//console.log(id);
    function Start(){
    id.current=setInterval(()=>{
        console.log(id.current);
           setTimer((prevTimer)=>prevTimer+1)
       },1000)
       
    }
     function Stop(){
        clearInterval(id.current)
     }

    return (
        <div>
            <h2>Timer is {timer}</h2>

            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
           
        </div>
    );
}

export default Timer;