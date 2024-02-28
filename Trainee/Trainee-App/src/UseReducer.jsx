import React,{useReducer} from 'react';

function UseReducer(props) {
    function reducer(state,action){
        if(action.type === "Increment"){
            return state + 1;
        }
        if(action.type === "Decrement"){
            return state - 1;
        }
    }

    let initialState = 0;

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>UseReducer</h1>
            <h3>{state}</h3>
            <button onClick={()=>{dispatch({type : "Increment"})}}>Increase</button>
            <button onClick={()=>{dispatch({type : "Decrement"})}}>Decrease</button>
            <button></button>

        </div>
    );
}

export default UseReducer;