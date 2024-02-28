import React from 'react';
import { useLocation } from 'react-router-dom';

function About(props) {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>
            <h1>About</h1>
            <p>{location.state.name}</p>
        </div>
    );
}

export default About;