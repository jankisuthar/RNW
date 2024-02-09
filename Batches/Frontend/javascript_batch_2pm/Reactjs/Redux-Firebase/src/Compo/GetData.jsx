import React, { useState } from 'react';
import db from '../firebase/firebase.js'
import { ref, get, remove ,child,} from "firebase/database";


function GetData(props) {
//    const[AllData,setAllData] = useState()

   let Handledelete=(id)=>{
    console.log("hello");
    remove(ref(db,'UsetData/'+id))
}
    get(ref(db,'UsetData/')).then((res)=>{
       let data =  res.val()
    //    console.log();
            // console.log(res.key);
        let AllData = []

        AllData.push(data)
        // console.log(AllData.push(data.val));

        // Object.entries(AllData).map((ele)=>{
        //     Object.entries(ele).map((e)=>{
        //         console.log(e[1].fname);
        //     })
           
        // })
        AllData?AllData.forEach(element => {
            Object.entries(element).map((e)=>{
                console.log(e[1].email);
                return <tr>
                 <td>{e[1].email}</td>
                <td>{e[1].password}</td>
                <td><button className='btn btn-outline-success' onClick={Handledelete(e[0])}>Delete</button></td>
            </tr>

            })
          
        }):'';
       
      
    })


  
  
   
          
    return (
        <>
        <div className="container">
        <table className='table text-center table-bordered '>
            <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Delete</td>
            </tr>
                
                {Object.entries(AllData).map((e)=>{
                    // console.log(e[0]);
                
                return <tr>
                        <td>{e[1].fname}</td>
                        <td>{e[1].email}</td>
                        <td>{e[1].password}</td>
                        <td><button className='btn btn-outline-success' onClick={Handledelete(e[0])}>Delete</button></td>
                    </tr>
                
                
            }) }   
        </table>
        </div>
        </>
    );
}

export default GetData;