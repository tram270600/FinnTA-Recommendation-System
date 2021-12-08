import React from "react";
import photoItem from '../images/outfit4.jpg'

export default function Item(props){
  const {item} = props
  return(
    <div key={item.product_id}>
    {/* <a href={`/product/${item.product_id}`}> */}
    <div className="item-image">
      <img src={photoItem}></img>
    </div>
    {/* </a> */}
  </div>

  
  )
}