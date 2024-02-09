import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './Home'
  import State from '../01State'
  import Compo from '../03Compo'
  import LifeCycle from '../05LifeCycle';
  import UseState from '../Funcion_Compo/01UseState'
  import UseEffect from '../Funcion_Compo/02UseEffect'
  import API from './03API'
  import FetchAPI from './04FetchAPI'
  import Event_Handling from './05Event_handling'
  import Condition from './06Condition_Rendering'
  import UseRef from './07UseRef'
  import Controlled_Compo from './08Controlled_Compo'

function Navbar(props) {
 const AllData = {'/':'Home','/state':'State','/compo':'Compo','/lifecycle':'LifeCycle','/usestate':'UseState',
'/useeffect':'UseEffect','/api':'API','/fetchapi':'FetchAPI','/event_handling':'Event_Handling','/condition':'Condition','/useref':'UseRef','/controlled_compo':'Controlled_Compo'}
const ReturnData = Object.entries(AllData).map((e)=>{
  // console.log(e);
  return <li className="nav-item" key={e[0]}>
  <Link className="nav-link active" aria-current="page" to={e[0]}>{e[1]}</Link>
    </li>

 })

    return (
        <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Red & White</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className='navbar-nav navbar-dark'>
        {ReturnData}
      </ul>
      
    </div>
  </div>
</nav>
<Routes>
    <Route element={<Home/>} path='/'/>     
    <Route element={<State/>} path='/state'/>     
    <Route element={<Compo/>} path='/compo'/>
    <Route element={<LifeCycle/>} path='/lifecycle'/>
    <Route element={<UseState/>} path='/usestate'/>
    <Route element={<UseEffect/>} path='/useeffect'/>
    <Route element={<API/>} path='/api'/>
    <Route element={<FetchAPI/>} path='/fetchapi'/>
    <Route element={<Event_Handling/>} path='/event_handling'/>
    <Route element={<Condition/>} path='/condition'/>
    <Route element={<UseRef/>} path='/useref'/>
    <Route element={<Controlled_Compo/>} path='/controlled_compo'/>
</Routes>
</Router>


        </div>
    );
}

export default Navbar;