import React from 'react';
import { useState } from 'react';

function Filter(props) {
    const itemList = ['Apple','Orange','Banana','Cherry','Pineple','Kiwi','Chikoo','Mango','Grapes','Guvava','Watermelon','Papaya','Coconut','asdfafhg'];

    const[FilterdList,setFilterdList]=useState(itemList);
    
    const FilterBySearch=(event)=>{
        const query = event.target.value;
        var updatedList=[...itemList]

        updatedList=updatedList.filter((item)=>{
            return item.toLowerCase().indexOf(query.toLowerCase())!==-1;

        })
        setFilterdList(updatedList);
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <input type="text" id='searchbox' className='form-control' placeholder='Serach Here...' onChange={FilterBySearch}/>
                    {FilterdList.map((item,index)=>{
                        console.log(item);
                      return <li key={index}>{item}</li>
                    })}
                </div>
            </div>
        </div>
        </>
    );
}

export default Filter;