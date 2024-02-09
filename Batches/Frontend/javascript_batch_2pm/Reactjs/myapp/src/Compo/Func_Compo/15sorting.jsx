import React, { useState } from 'react';

function Sorting(props) {
    const data = ['Banana','Orange','Apple','Kiwi','Cherry'];
    const [sortState,setsortState]=useState('none')
    // console.log(data);
    // Ascending order
    // const sort = data.sort();
    // console.log(sort);
    // descending order
    // const dsort = data.sort().reverse()
    // console.log(dsort);

    const sortmethod={
        none:{method:(x,y)=>null}, 
        Ascending:{method:undefined},
        Descending:{method:(a,b)=>(a>b?-2:2)}
      
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <select defaultValue={'DEFAULT'} onChange={(e)=>setsortState(e.target.value)}>
                            <option value="DEFAULT" disabled>None</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                        <ul>
                            {data.sort(sortmethod[sortState].method).map((ele,i)=>(
                                <li key={i}>{ele}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sorting;