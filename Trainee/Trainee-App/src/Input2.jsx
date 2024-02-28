import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add,Remove } from './Redux/Action';

function Input() {
    const dispatch = useDispatch()
    const data = useSelector((store)=>store)

function AddCounter(){
    dispatch(Add(5))
}

function RemoveCounter(){
    dispatch(Remove(10))
}
    return (
        <div>
            <h1>Counter</h1>
            <p>{data}</p>
            <button onClick={AddCounter}>Add</button>
            <button onClick={RemoveCounter}>Remove</button>
        </div>
    );
}

export default Input;