import React,{useContext} from 'react';
import {ThemeContext} from './19Mytheme'

function Theme(props) {
    const DarkTheme = useContext(ThemeContext)
    const themestyles={
        backgroundColor:DarkTheme?'#333' : '#ccc',
        color:DarkTheme?'#ccc' : '#333',

    }
    return (
        <div>
            <div className="container" style={themestyles}>
                <h1>Function Compo Theme</h1>
                <div>This is Theme Based div</div>
            </div>
        </div>
    );
}


export default Theme;