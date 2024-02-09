import React, { useState } from 'react';

function Counter(props) {
//   const[state,setState]=useState(0)



   
    return (
        <div>
            <h1>Counter is {state}</h1>
            <button onClick={update}>Click</button>
        </div>
    );
}

export default Counter;