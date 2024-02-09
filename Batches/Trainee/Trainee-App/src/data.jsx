import { getDatabase, ref, set ,get} from "firebase/database";
import app from './firebase'

import React from 'react';

function Data(props) {

    const db = getDatabase(app);
    

    //create data
    const createdata = ()=>{
    set(ref(db,'users'),{
      id:102,
      name:"angella",
      age:22,
      email:"angella@gmail.com"
    })}


    //get data
      const GetData=()=>{
      get(ref(db,'users/')).then((res)=>{
        console.log(res.val());
      }) 
    }
    return (
        <div>
                <button onClick={createdata}>Create data</button>
                <button onClick={GetData}>Getdata</button>
        </div>
    );
}

export default Data;