
import { Link } from "react-router-dom"
function Nav() {
  return (
    <>
    <nav className="site-nav" >
    <Link to={'/register'}>Signup</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/foods'}>Restaurants</Link>
    <Link to={'/products'}>Products</Link>
    </nav>
    </>
  )
}

export default Nav