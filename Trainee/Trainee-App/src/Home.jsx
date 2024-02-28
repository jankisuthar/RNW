import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
const navigate = useNavigate();
const name = "Pintu Kumar"
const age = 24

const gotoabout = () => {
    navigate("/about",{state : {name : name,age:age}});
}

const gotocontact = () => {
    navigate("/contact")
}
    return (
        <div>
            <h1>Home</h1>
            <button onClick={gotoabout}>Go To About Page</button>
            <button onClick={gotocontact}>Go To Contact Page</button>
        </div>
    );
}

export default Home;