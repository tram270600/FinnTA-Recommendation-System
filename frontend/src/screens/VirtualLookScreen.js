import NavBar from '../components/NavBar'
import photo1 from '../images/outfit5.jpg'
import photo2 from '../images/outfit2.jpg'
import photo3 from '../images/outfit6.jpg'
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'

import categoryData from '../data/categories'
import accountData from '../data/accounts'
import productData from '../data/products'

import '../styles/virtualLook.scss'
import avatar from '../images/avatar.png'
import data from '../data/accounts'


//Import Image
// import photoItem from '../images/donut1.jpg'
import photoItem from '../images/outfit4.jpg'
import Item from '../components/Item'

function VirtualLookScreen(props) {
  const account = accountData.accounts.find(x => x.account_id === props.match.params.account_id);
  const photoSupple = "../images/outfit4.jpg";
  console.log("Account ID:", props.match.params.account_id);

  // function havePhotoSup(){
  //   if(product.pphotosup.length != 0) return true;
  //     else return false;
  // }


  // if (!account){
  //   return <div> Account Not Found</div>
  // }
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="product-image">
            {/* <img src={product.product_image.default} alt="upload-image"></img> */}
            
        </div>
        {/* <div className="control-btn">
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
          
        </div> */}
        <div className="content-right">
          <div className="title-component">
            <div className="title">Create an Outfit</div>
          </div>
          <div className="category-list">
            {categoryData.map((cates) => (
                <div className="cate-content">
                <div className="cate-name">{cates}</div>
                  <div className="cate-item">
                    {/* {
                    productData.products.filter(product => product.pcategory == cates).map((pro) => (
                     <a href={`/product/${pro.product_id}`}>
                      <div className="item-image">
                        <img src={pro.product_image.default}></img>
                      </div>
                     </a>  
                    ))
                    
                    } */}
                     {(productData.products.filter(product => product.pcategory == cates).length != 0) ?
                      productData.products.filter(product => product.pcategory == cates).map((pro) => (
                        <a href={`/product/${pro.product_id}`}>
                        <div className="item-image">
                          <img src={pro.product_image}></img>
                        </div>
                        </a>  
                      )) : 
                    <div> <span> You do not have any Saved Item or Product in {cates} category </span></div>  
                  }
                  </div>
              </div>
            ))}

            {/* <div className="cate-content">
              <div className="cate-name">Shirt</div>
              <div className="cate-item">
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
              </div>
            </div>

            <div className="cate-content">
              <div className="cate-name">Shirt</div>
              <div className="cate-item">
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
              </div>
            </div>

            <div className="cate-content">
              <div className="cate-name">Shirt</div>
              <div className="cate-item">
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
                <div className="item-image">
                  <img src={photoItem}></img>
                </div>
              </div>
            </div> */}
          </div>
           
          
        </div>
      </div>
    </div>
    </>
     

  );
}

export default VirtualLookScreen;
