import React from 'react';
import {
    Link,
  } from "react-router-dom";
function Navigate(props) {
    return (
       <>
       <div className="container mt-5">
        <Link to="/usestate" className='btn btn-primary'>UseState</Link>
        <br /><br />
        <Link to="/useref" className='btn btn-warning text-white'>UseRef</Link>
       </div>
       </>
    );
}

export default Navigate;