import Header from './Header'
import Home from './Home'
import './App.css'
import Card from './Card'
import restaurants from '../restraunts'
function App() {
  return (
    <>
    <Header/>
    <Home/>
     <Card {...restaurants} />
     
    </>
  )
}

export default App
