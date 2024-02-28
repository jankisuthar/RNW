import React,{useEffect, useState} from 'react';

function UseEffect(props) {
const [num,setNum] = useState(0)

useEffect(()=>{
    if(num >= 1){
    document.title = `Chat (${num})`
    } else {
        document.title = `Chat `
    }
},[num])

    return (
        <div>
            <h1>UseEffect</h1>
            <h3>{num}</h3>
            <button onClick={()=>{setNum(num + 1)}}>Update</button>
            <button onClick={()=>{setNum(num - 1)}}>Decreace</button>

        </div>
    );
}

export default UseEffect;