import Header from './Header'
import Home from './Home'
import { useState } from 'react'
import './App.css'
import Card from './Card'
import restaurants from '../restraunts'
function App() {


const [Count, setCount] = useState(0)

 
  let handlecount=()=>{
    setCount(Count+1)
  }

  return (
    <>
    <Header/>
    <Home/>    
     <Card {...restaurants} />
     
    <button onClick={handlecount}>Count {Count}</button>
    </>
  )
}

export default App
