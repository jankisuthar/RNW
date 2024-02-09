import React from 'react';
import { useReducer } from 'react';

const initialValue = 0

function Reducer(state,action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            return state+=1; 
        case 'DECREMENT':
            return state-=1;
        default:
            return state;
    }
}

function UseReducer(props) {
        const[hello,dispatch]=useReducer(Reducer,initialValue)
    return (
        <div>
            <div className="container mt-5">
                <button className='btn btn-danger' onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
                <h1>{hello}</h1>
                <button className='btn btn-success' onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            </div>
        </div>
    );
}

export default UseReducer;