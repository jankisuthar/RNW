import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Card from './Card'
import Table from './Table'
import Timer from './Component/Timer'
import Input from './Component/Redux/Input'
import Display from './Component/Redux/Display'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function App() {
  const [state, setState] = useState(true)

  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact </Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
