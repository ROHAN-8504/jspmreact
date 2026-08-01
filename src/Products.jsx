import { useState,useEffect } from "react";
import Poductcard from "./Poductcard";
function Products({serachquery}) {

const [products, setproducts] = useState([])


useEffect(()=>{
fetch('https://jspmbackend.onrender.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
},[])


 let filteredproducts=products.filter((p)=>{
  return p.title.toLowerCase().includes(serachquery.toLowerCase())
 })


//fetch the products data from the server
  return (
    <>
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Products</p>
        <h2>Designed like a catalog, not a feed</h2>
        <p>Search narrows the gallery instantly while the cards keep a consistent editorial rhythm.</p>
      </div>
   <div className="card-grid card-grid--products">

    {
        filteredproducts.map((p)=>{
       return   <Poductcard key={p.id ?? p.title} title={p.title}  image={p.image}  price={p.price}  />
        })
    }

    {filteredproducts.length === 0 && (
      <div className="empty-state">
        <p className="eyebrow">No matches</p>
        <h3>Try a different search term</h3>
        <p>The product wall is clear right now for this query.</p>
      </div>
    )}


   </div>
   </section>



    </>
  )
}

export default Products