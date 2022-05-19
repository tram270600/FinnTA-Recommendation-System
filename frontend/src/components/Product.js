import React, {useState} from 'react'
import '../styles/trending.scss'
import avatar from '../images/avatar.png'

export default function Product(props){
  const {product} = props;
  const [name, setName] = useState('Ubyie._');
  console.log("Props: ", product);
  return(
    <div key={product.id}>
     <a href={`/product/${product.id}`}>
      <div className="ProdCard">
            <div className="prodimage">
              {/* <img src={process.env.PUBLIC_URL + `/Images/product.png`} alt="" height="434px" width="400px"/> */}
              <img 
                src={product.product_image} 
                alt={product.product_name}></img>
            </div>
                <div className="avatar">
                 <img src={avatar}  alt="" height="50px" width="50px"/>
                 <span>{name}</span>
                 <div class="view_Item"><button>View profile<i class="fas fa-arrow-right"></i></button></div>
                </div>
            <div className="detailbox">
                <div className="product-name">{ product.product_name }</div>
                
                <div className='product-description'>{ product.product_description}</div>
                <div className='product-price'>${ product.product_price}</div>
                <button>Collect</button>
            </div>
           
        </div>
    </a>
  </div>
  )
}