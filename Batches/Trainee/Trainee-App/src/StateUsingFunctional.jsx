import React from 'react';

function StateUsingFunctional(props) {
    const x = 10;
    function onClick(){
        return x = 15;
    }
    return (
        <div>
            <p>{x}</p>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}

export default StateUsingFunctional;