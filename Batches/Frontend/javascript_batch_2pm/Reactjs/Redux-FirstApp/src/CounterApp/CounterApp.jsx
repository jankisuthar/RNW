import React from 'react';
import {incNumber,decNumber} from '../Actions/index'
import { useSelector,useDispatch } from 'react-redux';

function CounterApp(props) {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.ChangeNumber)
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-primary' onClick={()=>dispatch(decNumber())}>Decrement</button>
                        <h1>{data}</h1>
                        <button className='btn btn-primary'onClick={()=>dispatch(incNumber())}>Increment</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CounterApp;