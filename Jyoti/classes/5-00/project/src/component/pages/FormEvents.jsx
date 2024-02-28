import axios from 'axios';
import React, { useState } from 'react';

function FormEvents() {

    const [user, setUser] = useState({})

    const inputData = (e) => {
        var { name, value } = e.target;
        const userData = {
            [name]: value
        }

        // spread operator ...
        const result = { ...user, ...userData }
        setUser(result)
        console.log(user)

        // var a = "hello"
        // const obj = {
        //     [a]: "world"
        // }
        // console.log(obj)

        const obj = {
            first: "hello"
        }
        // console.log({ obj, name: "jyoti",age:123 })
        // console.log({ ...obj, ...userData })
    }

    const submitData = async (event) => {
        event.preventDefault();
        await axios.post('https://65ddd00edccfcd562f558492.mockapi.io/user',user)
        .then((res)=>{
            alert("data has been inserted")
            window.location.href = window.location.href;
        })
        .catch((err)=>console.log(err))
    }

    return (
        <>
            <div className="col-6 mx-auto shadow my-5 p-5">
                <form action="" method='post' onSubmit={(e) => submitData(e)}>
                    <h2 className='text-center'>signup</h2>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='enter username' name='username' onChange={(e) => inputData(e)} />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='enter email id' onChange={(e) => inputData(e)} name='emailId' />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='enter mobile' onChange={(e) => inputData(e)} name='mobile' />
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success'>submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormEvents;