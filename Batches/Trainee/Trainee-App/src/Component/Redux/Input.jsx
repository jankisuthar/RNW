import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Addaction } from './Action';

function Input() {
     const [state,setState]=useState("");
     const dispatch=useDispatch()

     function AddText(e){
          setState(e.target.value)
     }
     function addTodo(){
         dispatch(Addaction(state))
     }
    return (
        <div>
            <input type="text" placeholder='enter name' onChange={AddText} />
            <button onClick={addTodo}>Add todo</button>
        </div>
    );
}

export default Input;