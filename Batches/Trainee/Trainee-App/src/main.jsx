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
import StateUsingFunctional from './StateUsingFunctional.jsx'
import StateUsingClass from './StateUsingClass.jsx'
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
    <StateUsingClass />
   
        
    </>


)
