import React from 'react';
import {
    Link,
  } from "react-router-dom";

function Previous(props) { 
    return (
     <>
        <Link to="/navigate" className='btn btn-dark'>Previous</Link>
     </>
    );
}

export default Previous;