import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from './Action';

function Input() {
const [input,setinput] = useState("")
const dispatch = useDispatch()

const handleForm =(e) => {
    dispatch(AddTodo(input))
    e.preventDefault()
    // e.target.reset();
}
    return (
        <div>
            <h1>Input</h1>
            <form action="" onSubmit={handleForm}>
                <input type="text" placeholder='Enter Value' onChange={(e)=>setinput(e.target.value)} />
                <br /><br />
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default Input;