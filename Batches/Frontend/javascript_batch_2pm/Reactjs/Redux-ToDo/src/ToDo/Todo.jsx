import React from 'react';
import { useState } from 'react';
import {AddToDo,DeleteToDo} from '../Actions/index'
import { useSelector,useDispatch } from 'react-redux';
import { v4 } from 'uuid'

function Todo(props) {
    const[inpdata,setInputdata]=useState('');
    const dispatch = useDispatch();       
    const list = useSelector((state)=>state.listdata.list)
    console.log(list);
    return (
        <>
            <div className="container mt-5" >
                <input type="text" className='form-control' value={inpdata} onChange={(e)=>setInputdata(e.target.value)}/>
                <button className='btn btn-primary mt-3' onClick={()=>dispatch(AddToDo(inpdata),setInputdata(''))}>Add Todo</button>
                <br /><br />
                {list.map((ele)=>{
                    console.log(ele.id);
                    return(
                        <>
                    <h1 key={ele.id}>{ele.data}</h1>
                    <button className='btn btn-success' onClick={()=>dispatch(DeleteToDo(ele.id))}>Delete</button>
                    <br /><br />
                    </>
                    ) 
                })}

               
            </div>
        </>
    );
}

export default Todo;