import React, { useCallback, useState } from 'react';


function UseCallback(props) {

    var funccount=new Set();

        const[count,setCount] = useState(0);
        const incCounter = useCallback(()=>{
            setCount(count+1)
        },[count])


        console.log(funccount.add(incCounter));
        // alert(funccount.size)
   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{count}</h1>
                        <button className='btn btn-primary' onClick={incCounter}>Click</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseCallback;