import NavBar from '../components/NavBar'
//Import Style
import '../styles/productDetail.scss'

//Import Image
import avatar from '../images/avatar.png'
import uploadImage from '../images/outfit4.jpg'
import photo1 from '../images/outfit5.jpg'
import photo2 from '../images/outfit2.jpg'
import photo3 from '../images/outfit6.jpg'

//Import Icon
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'

//Import Data
import productData from '../data/products'
import data from '../data/accounts'

function EditItemScreen(props) {
  const product = productData.products.find(x => x.product_id === props.match.params.product_id);
  console.log("Product ID:", props.match.params.product_id);

  if (!product){
    return <div> Product Not Found</div>
  }
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="product-image">
            <img src={uploadImage} alt="upload-image"></img>
            
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
          <div className="func-name">
            <button className="control-blue"><img src={collect}></img></button>
            <p>Save item</p>
          </div>
          
        </div>
        <div className="content-right">
          <div className="title-component">
            <div className="title">{product.product_name}</div>
            {/* <div className="title">Product's name</div> */}
            <div className="description">{product.product_description}
            </div>
            <div className="price">${product.product_price}</div>
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
                    <span>LamiopDit</span>
                  </div>
              </div>
            </div>
            <div className="supplementary-image">
                <div className="sub-title">Supplementary Image</div>
                <div className="group-img">
                  <div className="supply-img">
                    <img src={photo1}></img>
                  </div>
                  <div className="supply-img">
                    <img src={photo2}></img>
                  </div>
                  <div className="supply-img">
                    <img src={photo3}></img>
                  </div>
                </div>
              </div>
          
        </div>
      </div>
    </div>
    </>
     

  );
}

export default EditItemScreen;
