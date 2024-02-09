import React from 'react';

function Event_handling(props) {
    const Btnclck=()=>{
        alert("You have clicked on Button!")
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <button className='btn btn-danger' onClick={Btnclck}>CLick me</button>
                    <AlertArea message="Playing">Watching Movie</AlertArea>
                </div>
            </div>
        </div>
        </>
    );
}

export default Event_handling;
function AlertArea({message,children})
{
 
    return(
        <>
            <button className='btn btn-success' onClick={()=>{alert(message)}}>{children}</button>
        </>
    )
}