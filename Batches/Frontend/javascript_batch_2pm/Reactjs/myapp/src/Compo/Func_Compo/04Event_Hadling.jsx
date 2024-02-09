import React from 'react';

function Event_Hadling(props) {

    const Btnclck=()=>{
        alert("You have clicked on Button!");
    }
    return (
        <>
            <div className="container mt-5">
                <button className='btn btn-danger' onClick={Btnclck}>Click me</button>
                <br /><br />
                <button className='btn btn-success' onClick={()=>alert('you have clicked!')}>Click me</button>
                <AlertArea message="playing">Watching Movie</AlertArea>
            </div>
        </>
    );
}

export default Event_Hadling;

function AlertArea({message,children})
{
    return(
    <>
        <button className='btn btn-primary' onClick={()=>alert(message)}>{children}</button>
    </>
    )
}