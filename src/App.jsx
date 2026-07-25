import Header from './Header'
import Home from './Home'
import './App.css'
import Card from './Card'
import restaurants from '../restraunts'
import Products from './Products'
function App() {

  return (
    <>
    <Header/>
    <Home/>    
     <Card {...restaurants} />
     <br />
     <br />
     <Products/>
  
    </>
  )
}

export default App
