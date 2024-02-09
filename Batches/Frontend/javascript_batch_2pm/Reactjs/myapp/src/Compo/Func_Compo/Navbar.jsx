import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  import UseState from './02UseState-Revision';
  import UseEffect from './03UseEffect';
  import Events from './04Event_Hadling';
  import Navigate from './12Navigate'
  import UseRef from './07UseRef'
  import Filter from './14Filter'

  import Sorting from './15sorting'
  import Promises from './16promises'
  import UseContext from './17UseContext'
  import MyTheme from './19Mytheme'
  import UseReducer from './20UseReducer'
  import UseCallback from './21UseCallback'
  import UseMemo from './22UseMemo'
 

function Navbar(props) {

  const menus = {'/usestate':'UseState','/useeffect':'UseEffect','/events':'Events','/navigate':'Navigate',
                  '/filter':'Filter','/sorting':'Sorting','/promises':'Promises','/usecontext':'UseContext'
                  ,'/mytheme':'MyTheme','/usereducer':'UseReducer','/usecallback':'UseCallback','/usememo':
                  'USeMemo'
                }
  const AllData = Object.entries(menus).map((res,i)=>{ 
    // console.log(res);
    return  <li key={i}>
              <Link className="dropdown-item" to={res[0]}>{res[1]}</Link>
             </li>
  })
    return (
       <>
       <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Red & white</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Class Compo</a>
        </li>
      
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Function Compo</a>
          <ul className="dropdown-menu">
           {AllData}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Routes>
        <Route path="/usestate" element={<UseState/>}/>
        <Route path="/useeffect" element={<UseEffect/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/navigate" element={<Navigate/>}/>
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/sorting" element={<Sorting/>}/>
        <Route path="/promises" element={<Promises/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>
        <Route path="/mytheme" element={<MyTheme/>}/>
        <Route path="/usereducer" element={<UseReducer/>}/>
        <Route path="/usecallback" element={<UseCallback/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
      
    </Routes>
</Router>
       </>
    );
}

export default Navbar;