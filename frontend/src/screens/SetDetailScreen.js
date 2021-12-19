import NavBar from '../components/NavBar'
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'
import productData from '../data/products'
import '../styles/productDetail.scss'
import avatar from '../images/avatar.png'
import data from '../data/accounts'
import outfit1 from '../images/outfit2.jpg'
import ProductInSet from '../components/ProductInSet'
import { useEffect, useState } from 'react'
function SetDetailScreen(props) {
    const [sets, setClothSet] = useState(null);
    const [collection, setCollection] = useState(null);
    const productList = [];
    // const product = productData.products.find(x => x.product_id === props.match.params.product_id);

    const product = 1;

    const set = productData.products.find(x => x.product_id === props.match.params.product_id);
//   const photoSupple = "../images/outfit4.jpg";
//   console.log("Product ID:", props.match.params.product_id);

  useEffect(()=> {
    fetch('http://localhost:8000/setClothes')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log("Fetch data ne", data);
      console.log("props;", props.match.params.id, "Fetch single", data[props.match.params.id - 1]);
      setCollection(data[props.match.params.id - 1])
      setClothSet(data[props.match.params.id - 1].product_idList);
    })
  }, [])
//empty dependency array means only function on the initial render not whether the data changes

//   if (!product){
//     return <div> Product Not Found</div>
//   }
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="product-image">
            {/* <img src={product.product_image} alt="upload-image"></img> */}
            <img src={collection && collection.set_img} alt="upload-image"></img>
            
        </div>
        <div className="control-btn">
          <div class="func-name">
            <button className="control-blue"><img src={expand}></img> </button>
            <p>Zoom</p>
          </div>
          <div className="func-name">
            <button className="control-pink"><img src={chat}></img></button>
            <p>Chat</p>
          </div>
          {/* <div className="func-name">
            <button className="control-blue"><img src={collect}></img></button>
            <p>Save item</p>
          </div> */}
          
        </div>
        <div className="content-right">
          <div className="title-component">
            <div className="title">{collection && collection.set_name}</div>
            {/* <div className="title">Product's name</div> */}
            <div className="description">Collection No.{collection && collection.id} including {collection && collection.product_idList.length} items
            </div>
            {/* <div className="price">${product.product_price}</div> */}
            </div>
            <div className="product-info">
              <div className="owner">
                <div className="sub-title">Posted by</div>
                  <div className="owner-info">
                    <img src={avatar} alt="post's owner"></img>
                    <span>LamiopDit</span>
                  </div>
              </div>
            </div>
            <div className="compriseof">
                <div className="sub-title">Comprise Of</div>
                { console.log("Sets ne: ", sets)}
                <div className='productList'>
                  {sets && sets.map((set) => 
                     {
                      console.log("Set number in Map: ", set)
                      const product = productData.products.find(x => x.product_id == set);
                      console.log("Product get from Map: ", product);
                      productList.push(product);
                     }
             
                  )}
                  {productList.map((product) => (
                    <ProductInSet product={product} />
                  ))}
                  {/* {sets && <ProductInSet sets={sets} />} */}
                  {/* {collection && console.log("Collection: ", collection)} */}
                </div>
            </div>
          
        </div>
      </div>
    </div>
    </>
     

  );
}

export default SetDetailScreen;
