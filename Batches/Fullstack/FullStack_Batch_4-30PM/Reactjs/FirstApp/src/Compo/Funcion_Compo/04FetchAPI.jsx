import React from 'react';
import { useEffect } from 'react';

function FetchAPI(props) {
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then((Response)=>{
                // console.log(Response);
               let HTMLDATA=''
                Response.forEach(element => {
                    // console.log(element);
                    HTMLDATA+=`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.title}</td>
                            <td>${element.body}</td>
                        </tr>
                    `
                    document.querySelector('#mydata').innerHTML = HTMLDATA
                });
            }).catch((Error)=>{
                console.log(Error);
            })
        },2000)
       
    })
    
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table className='table table-bordred'>
                        <thead>
                            <th>id</th>
                            <th>title</th>
                            <th>Body</th>
                        </thead>
                        <tbody id='mydata'>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default FetchAPI;