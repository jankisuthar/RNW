import React,{useState,createContext} from 'react';
import { useContext } from 'react';


export const ThemeContext = createContext()

// return <div style={themeStyles}>Function Theme</div>
 

  
function MyTheme(props) {

  const dTheme = useContext(ThemeContext)

  const themeStyles = {
    backgroundColor: dTheme ? '#333' : '#ccc',
    color: dTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  // const darksTheme = useContext(ThemeContext)
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme((themeStyles) => !themeStyles)
  }
  
    return (
        <div>
            <div className="container mt-5">
            <h1>Simple useContext Theme Example</h1>
              <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
              
                <div style={themeStyles}>Function Theme</div>
              </ThemeContext.Provider>
            </div>
        </div>
    );
}

export default MyTheme;