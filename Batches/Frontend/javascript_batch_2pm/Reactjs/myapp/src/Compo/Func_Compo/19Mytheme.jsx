import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Theme from './18Theme';

export const ThemeContext = createContext()

function Mytheme(props) {
    const[theme,setTheme]=useState(true)

    function toggleTheme(){
        console.log("called");
        setTheme((ele) => !ele)
    }
    return (
        <div>
            <div className="container mt-5">
                <ThemeContext.Provider value={theme}>

                <button className='btn btn-success' onClick={toggleTheme}>ToggleTheme</button>
                <br /><br />
                <Theme/>
                </ThemeContext.Provider>
            </div>
        </div>
    );
}

export default Mytheme;