import React from 'react';

function Condition_rendering(props) {
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                <Item name="Apple" isPacked={true}/>
                <Item name="Orange" isPacked={false}/>
                <Item name="Banana" isPacked={true}/>
                <Item name="Kiwi" isPacked={false}/>
                </div>
            </div>
        </div>
      </>
    );
}

export default Condition_rendering;

function Item({name,isPacked})
{
    
        if(isPacked)
        {
        return <li>{name}</li>
        }
        return 
    

}