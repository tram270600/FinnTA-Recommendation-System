import React from "react";

export default function Product(props){
  const {product} = props
  return(
    <div key={product.product_id}>
    <a href={`/product/${product.product_id}`}>
      <img 
      src={product.product_image} 
      alt={product.product_name}></img>
    </a>
    <div> Price: {product.product_price}</div>
  </div>
  )
}