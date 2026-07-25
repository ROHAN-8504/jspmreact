
import { Link } from "react-router-dom"
function Nav() {
  return (
    <>
    <nav style={{display:"flex",gap:"20px"}} >
    <Link to={'/register'}  >Signup</Link>
    <Link to={'/about'}  >About</Link>
    <Link to={'/foods'} >restaraunts</Link>
    <Link to={'/products'} >Products</Link>
    </nav>
    </>
  )
}

export default Nav