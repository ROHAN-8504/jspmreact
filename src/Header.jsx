import Nav from "./Nav"
function Header() {
  return (
    <>
    <header style={{display:"flex",
        justifyContent:"space-evenly"
        }} >
    <img src="src/assets/vite.svg" alt="" />
     <Nav/>
    </header>
    </>
  )
}

export default Header