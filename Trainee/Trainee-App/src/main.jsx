import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Data from './data.jsx'
import Counter from './Counter.jsx'
import UserStateHook from './UserStateHook.jsx'
import Timer from './Component/Timer.jsx'
import { reduxStore } from './Component/Redux/Store.js'
import { Provider } from 'react-redux'
import ShowApi from './Component/product/ShowApi.jsx'
// import PropsUsingFunctional from './PropsUsingFunctional.jsx'
import PropsUsingClass from './PropsUsingClass.jsx'
// import StateUsingFunctional from './StateUsingFunctional.jsx'
import StateUsingClass from './StateUsingClass.jsx'
import Student1 from './Student1.jsx'
import Student2 from './Student2.jsx'
import UseRef from './UseRef.jsx'
import UseReducer from './UseReducer.jsx'
import UseEffect from './UseEffect.jsx'
import Formvalidation from './Formvalidation.jsx'
import UseMemo from './UseMemo.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Input2 from './Input2.jsx'
import { store } from './Redux/Store.js'
import Input from './Redux/Input.jsx'
import Display from './Redux/Display.jsx'
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
    {/* <Provider store={reduxStore}>
       <App />
    </Provider> */}
    {/* <ShowApi/> */}
      {/* <PropsUsingFunctional name="himil"/>
      <PropsUsingFunctional name="dhruvi"/>
      <PropsUsingFunctional name="janaki"/>
      <PropsUsingFunctional name="jyoti"/>
      <PropsUsingFunctional name="sunaina"/> */}
    {/* <PropsUsingClass age="25"/>
    <PropsUsingClass age="20"/>
    <PropsUsingClass age="15"/>
    <PropsUsingClass age="5"/> */}
    {/* <StateUsingFunctional /> */}
    {/* <StateUsingClass /> */}
    {/* <Student1/>
    <Student2/> */}
   {/* <UseRef/> */}
        {/* <UseRef/> */}
        {/* <UseReducer/> */}
        {/* <UseEffect/> */}
        {/* <Formvalidation /> */}
        {/* <UseMemo/> */}
        
        {/* <BrowserRouter>
          <App />
        </BrowserRouter> */}

<Provider store={store}>
        {/* <Input2 /> */}
        <Input />
        <Display />
   </Provider>
    </>


)
