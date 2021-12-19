import React, {useState, useEffect} from 'react'
import productData from '../data/products'
import Product from '../components/Product'
import '../styles/trending.scss'
import avatar from '../images/avatar.png'

function Collection2() {
    const [name, setName] = useState('Ubyie._');
    const [collection, setCollection] = useState(null);
    useEffect(()=> {
        fetch('http://localhost:8000/setClothes')
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log("Fetch data ne", data);
          setCollection(data);
        //   console.log("props;", props.match.params.id, "Fetch single", data[props.match.params.id - 1]);
        //   setCollection(data[props.match.params.id - 1])
        })
      }, [])
    return (
    <div className="content-max-width">
    <div className="trend"><h1>Collection</h1>
        <div className ="contenttrend">Collection of this season, view to renew our outlook</div>
        <div className="all-product">
        {collection && collection.map((c) => (
        // <Product key={product.product_id} product={product}></Product>
        <div key={c.id}>
        <a href={`/set/${c.id}`}>
         <div className="ProdCard">
               <div className="prodimage">
                 {/* <img src={process.env.PUBLIC_URL + `/Images/product.png`} alt="" height="434px" width="400px"/> */}
                 <img 
                   src={c.set_img} 
                   alt={c.id}></img>
               </div>
                   <div className="avatar">
                    <img src={avatar}  alt="" height="50px" width="50px"/>
                    <span>{name}</span>
                    <div class="view_Item"><button>View set<i class="fas fa-arrow-right"></i></button></div>
                   </div>
               <div className="detailbox">
                   <div class="product-name">{ c.set_name } {c.id}</div>
                   <div className='product-description'>Collection includes {c.product_idList.length} items</div>
               </div>
            </div>
            </a>
        </div>
            ))}
        </div>
        </div> 
    </div>
       
    )
}

export default Collection2
