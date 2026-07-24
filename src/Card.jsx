
function Card() {
   const restaurants = [
  {
    name: "Maharaaj",
    address: "Infinia Tower, Chandrasekharpur, Bhubaneswar",
    img: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/5/c48b6233-75f2-4577-98d9-4fb0dd555f30_image1968203e8e28a4bd9a3355443044bdcd1.JPG"
  },
  {
    name: "Barbeque Nation",
    address: "Jaydev Vihar, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    name: "Mainland China",
    address: "Esplanade One Mall, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    name: "Kake Da Minar",
    address: "Saheed Nagar, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  },
  {
    name: "The Zaika",
    address: "Patia, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  },
  {
    name: "Mughlai Roast",
    address: "KIIT Square, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1515669097368-22e68427d265"
  },
  {
    name: "The Urban Kitchen",
    address: "Nayapalli, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"
  },
  {
    name: "Spice Affair",
    address: "Patrapada, Bhubaneswar",
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5"
  }
];
  return (
    <>
    {
      restaurants.map((p)=>{
   return   <div style={{border:"1px solid black"}}   >
        <img height={250} width={250}   src={p.img} alt="" />
        <p>{p.name}</p>
        <p>{p.adress}</p>
    </div>
      })

    }
  
    
    </>
  )
}

export default Card