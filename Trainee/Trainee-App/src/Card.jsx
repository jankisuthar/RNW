import React, { useEffect, useState } from 'react';

function Card() {
    
    const[state,setState]=useState("https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg")

    useEffect(()=>{
          console.log("mount phase")

          return(()=>{
            alert("unmount phase")
          })
    })
    return (
        <div>
            <img src={state} alt="" />
            <button onClick={()=>setState("https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg")}>Click</button>
        </div>
    );
}

export default Card;