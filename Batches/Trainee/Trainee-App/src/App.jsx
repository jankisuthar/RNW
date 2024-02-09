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

function App() {
  const [state, setState] = useState(true)

  return (
    <>
      <div>
        
         {/* {
            state ? <Card/> : <Table/>

          }
          <button onClick={()=>setState(true)}>show card</button>
          <button onClick={()=>setState(false)}>show table</button>  */}
     <Input/>
     <Display/>
       </div>
   
    </>
  )
}

export default App
