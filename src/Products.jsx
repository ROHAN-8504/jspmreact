import { useState } from "react";
import Poductcard from "./Poductcard";
function Products() {

const [products, setproducts] = useState([])


//fetch the products data from the server
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));



  return (
    <>
    
   <div style={{display:"flex",flexWrap:"wrap",gap:"100px"}}>

    {
        products.map((p)=>{
       return   <Poductcard title={p.title}  image={p.image}  price={p.price}  />
        })
    }


   </div>



    </>
  )
}

export default Products