import Nav from "./Nav"
function Header({setsearchquery}) {
   
    let darkmode=()=>{
      document.body.classList.toggle('toglemode')
    }


  return (
    <>
    <header className="site-header" >
    <div className="brand-lockup">
      <img className="brand-mark" src="src/assets/vite.svg" alt="" />
      <div>
        <p className="eyebrow">Curated marketplace</p>
        <h1 className="brand-title">Mosaic</h1>
      </div>
    </div>
    <label className="search-shell">
      <span>Search</span>
      <input onChange={(e)=>{setsearchquery(e.target.value)}} type="text" placeholder="Find products, restaurants, and more" />
    </label>
     <Nav/>
     <button className="theme-toggle" onClick={darkmode} type="button" aria-label="Toggle theme">
      <img height={22} width={22} src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" />
     </button>
    </header>
    </>
  )
}

export default Header