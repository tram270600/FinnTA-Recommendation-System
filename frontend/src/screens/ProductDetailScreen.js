import NavBar from '../components/NavBar'
import uploadImage from '../images/outfit4.jpg'
import photo1 from '../images/outfit5.jpg'
import photo2 from '../images/outfit2.jpg'
import photo3 from '../images/outfit6.jpg'
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'

import '../styles/productDetail.scss'
import avatar from '../images/avatar.png'
function App() {
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
            <div className="title">Product's name</div>
            <div className="description">The new collection of this Summer 
            with hot trending items including: Tops, bottoms, mix with luxury accesories
            </div>
            <div className="price">$300.0</div>
            </div>
            <div className="product-info">
              <div className="addition-info">
                <div className="sub-title">Additional Information</div>
                <div className="sub-info"> 
                    <p> Color </p>
                    <span> Orange </span>
                </div>
                <div className="sub-info"> 
                    <p> Pattern </p>
                    <span> Checked </span>
                </div>
                <div className="sub-info"> 
                    <p> Material </p>
                    <span> Cotton</span>
                </div>
                <div className="sub-info"> 
                    <p> Occassion </p>
                    <span> Casual, Work </span>
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

export default App;
