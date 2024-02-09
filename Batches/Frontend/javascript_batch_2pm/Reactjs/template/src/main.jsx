import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import {
  BrowserRouter as Router,
   Routes,
   Route,
 
 } from "react-router-dom";
 import Index from './template/index'
 import Contact from './template/contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    
  <Router>
    <Routes>
        <Route path='/' element={<Index/>}/>
       
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>

  </React.StrictMode>,
)
