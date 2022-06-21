import NavBar from '../components/NavBar'
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'
import '../styles/productDetail.scss'
import avatar from '../images/avatar.png'
import { useEffect, useState } from 'react'
import {Image} from 'cloudinary-react';

function ProductSystemScreen(props) {
  const [product, setProduct] = useState(null);
  const [pathImage, setPathImage] = useState(null);
  useEffect(()=> {
    console.log("Props", props);
   fetch(`http://localhost:8000/itemServer?item_id=${props.match.params.id}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log("Fetch data from Server product", data);
          setProduct(data[0])
          let path = `${props.match.params.category}/${props.match.params.id}`;
          setPathImage(path);
        })
    }, [])

    function trimmingProductId(strItemId){
        console.log("Before trimming", strItemId);
        const onlyId = strItemId?.substring(strItemId.indexOf('/') + 1);
        console.log("After trimming", onlyId);
        return onlyId;
    }

  if (!product){
    return <div> Product Not Found</div>
  }
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="product-image">
            <Image
                key={pathImage}
                cloudName="tramnguyen2706" 
                publicId={pathImage}
                loading="lazy"
                dpr="auto"
                responsive
                // width="100"
                // crop="scale"
                responsiveUseBreakpoints="true"
                alt="upload-image">
            </Image>
        </div>
        <div className="control-btn">
          <div className="func-name">
          <button className="control-blue"><img src={expand}></img></button>
            <p>View 3D</p>
          </div>
          <div className="func-name">
            <button className="control-pink"><img src={chat}></img></button>
            <p>Chat</p>
          </div>
          <div className="func-name">
            <button className="control-blue"><img src={collect}></img></button>
            <p>Save item</p>
          </div>
          
        </div>
        <div className="content-right">
          <div className="title-component">
            <div className="title">{product.product_name}</div>
            <div className="description">{product.product_description}
            </div>
            <div className="price-detail">${product.product_price}</div>
            </div>
            <div className="product-info">
              <div className="addition-info">
                <div className="sub-title">Additional Information</div>
                <div className="sub-info"> 
                    <p> Color </p>
                    <span> {product.pcolor} </span>
                </div>
                <div className="sub-info"> 
                    <p> Category </p>
                    <span> {product.pcategory} </span>
                </div>
                <div className="sub-info"> 
                    <p> Pattern </p>
                    <span> {product.ppattern} </span>
                </div>
                <div className="sub-info"> 
                    <p> Material </p>
                    <span> {product.pmaterial} </span>
                </div>
                <div className="sub-info"> 
                    <p> Occassion </p>
                    <span> {product.poccassion} </span>
                </div>
              </div>
              <div className="owner">
                <div className="sub-title">Posted by</div>
                  <div className="owner-info">
                    <img src={avatar} alt="post's owner"></img>
                    <span>ubyii</span>
                  </div>
              </div>
            </div>
            <div className="supplementary-image">
                <div className="sub-title">Supplementary Image</div>
                <div className="group-img">
                </div>
              </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductSystemScreen;
