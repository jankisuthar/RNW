import React, { useEffect, useState } from 'react';
import Details from './details'

function API(props) {
    const [data,setData]=useState(Details)
    console.log(data);
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table className='table table-bordered'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        {data.map((ele,i)=>{
                            console.log(ele);
                            return <tr key={i}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default API;