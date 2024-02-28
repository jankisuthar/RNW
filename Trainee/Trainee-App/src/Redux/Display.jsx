import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTodo, EditTodo } from './Action';

function Display() {
    const data = useSelector((sunaina)=>sunaina.todoreducer);
    // console.log(data);
    const dispatch = useDispatch()

    const deleteTodo = (i)=>{
        dispatch(DeleteTodo(i))
    }

    const editTodo = (index,newValue) => {
        const newData = [...data];
        newData[index] = newValue;
        dispatch(EditTodo({index,newValue}))
    }

    return (
        <div>
            <h1>Display</h1>
            {data.map((ele,i)=>{
                return (<>
                    <li key={i}>{ele}</li>
                    <button onClick={()=>deleteTodo(i)}>Delete</button>
                    <button onClick={()=>{
                    const newValue = prompt("Enter Value")
                    console.log(newValue);
                    editTodo(i,newValue)
                    }}>Edit</button>
                    </>)
            })}
        </div>
    );
}

export default Display;