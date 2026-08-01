import {Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import './App.css'
import Card from './Card'
import restaurants from '../restraunts'
import Signup from './Signup'
import Products from './Products'
import About from './About'
function App() {
const [serachquery,setsearchquery]=useState('')

  return (
    <>
    <Header setsearchquery={setsearchquery}  />
    <main className="app-shell">
      <Routes>

    <Route path='/'  element={<Home/>}  />
    <Route path='/about' element={<About/>}  />
    <Route path='/foods' element={<Card  {...restaurants}  />}/>
    <Route path='/products' element={<Products serachquery={serachquery} />} />
    <Route path='/register' element={<Signup/>}  />

      </Routes>
    </main>
    </>
  )
}

export default App
