

function Poductcard({title,image,price}) {
  return (
    <>
    <article className="product-card" >
        <img src={image} alt="" />
        <div className="product-card-body">
          <p className="card-kicker">Collection piece</p>
          <h3>{title}</h3>
          <p className="price-tag">{price}</p>
        </div>
    </article>
    
    </>
  )
}

export default Poductcard