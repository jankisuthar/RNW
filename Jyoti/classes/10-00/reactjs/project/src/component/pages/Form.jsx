import axios from 'axios';
import React, { useState } from 'react';

function Form() {
    const [user, setUser] = useState({});
    const inputData = (event) => {
        const { name, value } = event.target;
        const newData = { [name]: value }
        const newObj = { ...user, ...newData }
        setUser(newObj)
    }

    const submitData = async (event) => {
        event.preventDefault();
        var url = 'https://65dec3adff5e305f32a0682a.mockapi.io/api/user';
        await axios.post(url, user)
            .then(() => {
                alert("data has been inserted!")
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <h1>change event</h1>
            <div className='col-6 mx-auto my-5 shadow p-5'>
                <h2>signup</h2>
                <form action="" method='post' onSubmit={(e) => submitData(e)}>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='username' name='username' onChange={(e) => inputData(e)} />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' placeholder='emailid' name='emailid' onChange={(e) => inputData(e)} />
                    </div>
                    <div className='mt-4'>
                        <input type="text" name='mobile' className='form-control' placeholder='mobile' onChange={(e) => inputData(e)} />
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;