import Nav from "./Nav"
function Header() {
   
    let darkmode=()=>{
      document.body.classList.toggle('toglemode')
    }



  return (
    <>
    <header style={{display:"flex",
        justifyContent:"space-evenly"
        }} >
    <img src="src/assets/vite.svg" alt="" />
     <Nav/>
     <img onClick={darkmode}   height={50} width={50}  src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" />
    </header>
    </>
  )
}

export default Header