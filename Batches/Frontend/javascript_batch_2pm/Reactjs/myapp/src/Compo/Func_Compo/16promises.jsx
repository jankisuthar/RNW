import React, { useEffect, useState } from 'react';

function Promises(props) {
const[data,setData] = useState('');
    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res)=>res.json())
            .then((Response)=>{
               
                setData(Response);
                
              
            })
            .catch((Error)=>{
                console.log(Error);
            })
            .finally(console.log("code executed!"))
        }, 3000);
    })
   

   
    return (
         <div className="container mt-5">
            <table className='table table-bordered'>
                <thead>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </thead>
                <tbody>
                  {Object.entries(data).map((ele)=>{
                    console.log(ele);
                    return <tr>
                        <td>{ele[1].postId}</td>
                        <td>{ele[1].id}</td>
                        <td>{ele[1].name}</td>
                        <td>{ele[1].email}</td>
                        <td>{ele[1].body}</td>
                    </tr>
                  })}
                </tbody>
            </table>
         </div>
    );
}

export default Promises;