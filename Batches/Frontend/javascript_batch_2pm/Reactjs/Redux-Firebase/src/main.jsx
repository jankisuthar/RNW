import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap5/src/css/bootstrap.min.css'
// import AddData from './Compo/AddData.jsx'
// import Contact from './Compo/Contact'
// import GetData from './Compo/GetData.jsx'
import CRUD from './Compo/CRUD'
// import Read from './Compo/Read'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AddData/> */}
    {/* <GetData/> */}
    {/* <Contact/> */}
    <CRUD/>
    {/* <Read/> */}
  </React.StrictMode>,
)
