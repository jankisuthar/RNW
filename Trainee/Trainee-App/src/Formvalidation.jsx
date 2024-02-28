import React, { useEffect } from 'react';
import { useState } from 'react';

function Formvalidation(props) {
    const [user,setUser] =useState("")
    const [password,setpassword] = useState("")
    const[usererror,setUserError] =useState(false)
    const[passworderror,setPasswordError] =useState(false)
    const [data,setdata] = useState([])

    useEffect(()=>{
        let storedData = JSON.parse(localStorage.getItem("data")) || [];
        setdata(storedData)
    },[])

function validateForm(e){
    e.preventDefault();
    if(user.length < 3 || user.length === ""){
        alert("Enter Your UserName")
    } else if (password.length < 3 || password.length === ""){
        alert("Enter Password")
    } else {
        alert("All good !!")
        console.log(user + " " 
        + password);

        const newData = {
            userName : user,
            Password : password
        }

        const updateddata = [...data,newData];

        localStorage.setItem("data",JSON.stringify(updateddata));

        setdata(updateddata)

        e.target.reset()

    }
}

    function handleUser(e){
        let input = e.target.value
        if(input.length < 3){
            setUserError(true)
        } else {
            setUserError(false)
        }
        setUser(input)
    }

    function handlepassword(e){
        let pwd = e.target.value
        if(pwd.length < 3){
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setpassword(pwd);
    }
    return (
        <div>
            <h1>Form </h1>
            <form action="" onSubmit={validateForm}>
                <input type="text" placeholder='Enter your userName' onChange={handleUser} />
                {usererror ?  <span>Invalid</span> : ""}
                <br /><br />
                <input type="password" placeholder='Enter your password' onChange={handlepassword}/>
                {passworderror ? <span>Invalid</span> : ""}
                <br /><br />
                <button>Login</button>
                <hr /><hr />
                <table border={2} cellPadding={8} cellSpacing={1}>
                    <thead >
                        <tr>
                            <th>Sr no.</th>
                            <th>UseName</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index)=>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.Password}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Formvalidation;