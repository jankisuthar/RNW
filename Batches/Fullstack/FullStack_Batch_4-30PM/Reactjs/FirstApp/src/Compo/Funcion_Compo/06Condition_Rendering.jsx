import React from 'react';

function Condition_Rendering(props) {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Item name="Apple" isPacked={true}/>
                        <Item name="Orange" isPacked={false}/>
                        <Item name="Kiwi" isPacked={true}/>
                        <Item name="Mango" isPacked={false}/>
                        <Item name="Cherry" isPacked={true}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Condition_Rendering;
function Item({name,isPacked})
{
    if(isPacked)
    {
        return <li>{name}</li>
    }
}