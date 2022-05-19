import React from 'react'
import { useContext, useCallback, useRef, useState, useEffect, CanvasContext } from 'react';
import { IKImage, IKContext, IKUpload} from 'imagekitio-react';
import {Image} from 'cloudinary-react';

import NavBar from '../components/NavBar'
import Collapsible from '../components/Collapsible'

import categoryData from '../data/categories'
import accountData from '../data/accounts'
import productData from '../data/products'

import '../styles/virtualRecommend.scss'
import html2canvas from 'html2canvas';


function VirtualRecommendScreen(props) {
  const account = accountData.accounts.find(x => x.account_id === props.match.params.account_id);
  const product_idList = [];
  const [set_name, setName] = useState("Collection's item");
  const [owner_id, setOwner] = useState(1);
  const [set_img, setImage] = React.useState("");
  const [isPending, setIsPending] = useState(false);
  const [categories, setCategory] = useState(null);

  useEffect(() => {
    console.log('Image Capture', set_img);
  }, [set_img])


  useEffect(()=> {
    fetch('http://localhost:8000/groupCategory')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log("Fetch Category Data", data);
      setCategory(data);
    })
  }, [])
// GET /resources/:resource_type/tags/:tag
  useEffect(()=> {
    fetch('https://res.cloudinary.com/tramnguyen2706/image/upload/v1652724470/accessories/')
    .then(res => {
      return console.log(res)
    })
    .then(data => {
      console.log("Category Data from Cloudinary", data);
      setCategory(data);
    })
  }, [])

  const handleSubmit = async (e) => {
    const set_image = await doCapture();
    console.log("Set image: ", set_image);
    const set = {set_img: set_image, owner_id, set_name, product_idList};
    e.preventDefault();
    setIsPending(true);
    console.log("Fetch Data:", set);
    fetch('http://localhost:8000/setClothes', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(set)
    }).then(() => {
      console.log("New set of clothes added");
      alert("New Collection is added successfully !");
      setIsPending(false);
    })
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      console.log(window.innerWidth, window.innerHeight)
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
      console.log(pos1, pos2, pos3, pos4);
    }
  }

  function addProductToSet(props) {
    const image = props.product_image;

    const node = document.createElement("div");
    node.innerHTML = "<div id='mydiv"+props.product_id+"'><div id='mydivheader'></div><button class='delete-photosup"+props.product_id+"'><i class='fas fa-times'></i></button><img src="+ image +" alt='hello'></img></div>"
    document.getElementsByClassName("outfit-look")[0].appendChild(node);

    document.getElementsByClassName(`delete-photosup${props.product_id}`)[0].addEventListener("click",() => deleteSelectItem(props.product_id));
    
    product_idList.push(props.product_id);
    addDragEnable();
  }

  function addDragEnable(){
    product_idList.forEach(function(item, index, array) {
      console.log(item, index)
      dragElement(document.getElementById("mydiv"+item));
    })
  }

  const deleteSelectItem = (deleteItem) => {
    var index = product_idList.indexOf(deleteItem);

    //Remove item from selected item list
    if (index !== -1) {
        product_idList.splice(index, 1);
    }
    var element = document.getElementById('mydiv' + deleteItem ); // will return element
    element.parentNode.removeChild(element); // will remove the element from DOM
  }

  //function for button
  function restart(){
    document.getElementsByClassName("product-image")[0].innerHTML = "";
     product_idList.forEach(function(item, index, array) {
      product_idList.pop(item);
    })
  }

  //Capture image of new Set
  async function doCapture(){
    await hiddenCloseOnItem();
     return html2canvas(document.getElementsByClassName("product-image")[0]).then(
       function (canvas){
        setImage(canvas.toDataURL("image/jpeg", 0.9));
        set_img != "" && console.log("In Capture return pciture: ", set_img);
        return canvas.toDataURL("image/jpeg", 0.9);}).catch(e => console.log(e)); 
    ;
  }

  async function hiddenCloseOnItem(){
      const element = document.querySelectorAll("[class*=delete-photosup]");
      return element.forEach(e => e.style.visibility = "hidden");

  }

  //Captialize Category group's name
  function capitalize(s)
  {
    return s && s[0].toUpperCase() + s.slice(1);
  } 
  
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="page-title">
        <div className="title">Create an Outfit</div>
        <div className="action-btn">
            <button className="secondary-btn" onClick={() => restart()}> RESTART </button>
            {!isPending && <button onClick={handleSubmit}> POST OUTFIT</button>}
            {isPending && <button disabled onClick={handleSubmit}> POSTING...</button>}
        </div>
      </div>

      <div className="page-content">
        <div className="content-right">
          <div className="item-inoutput-list">
            {categories && Object.keys(categories[0]).map((category) => (
              <div className="category-content">
                <div className="category-heading">
                  <div className="category-name">{capitalize(category)}</div>
                  <div className="category-amount-component">({categories[0][category].length})</div>
                </div>
                {categories[0][category].map((subcategory,index) => 
                  (
                  <>
                   <Collapsible key={subcategory[0]} title = {capitalize(subcategory[1])} defaultExpanded="false"> 
                   The index of subcategory is {subcategory[0]} <br/><br/>
                   Click <i>Collapse</i> to hide everything... <br/><br/>
                    <div className="category-item">
                      {/* {(productData.products.filter(product => product.pcategory === category).length !== 0) ?
                          productData.products.filter(product => product.pcategory === category).map((pro) => ( */}
                            <div className="item-box">
                              {/* <img src="https://res.cloudinary.com/tramnguyen2706/image/upload/v1652724470/accessories/187591410.jpg" alt="hello" onClick={() => addProductToSet()}></img> */}
                              <Image 
                                cloudName="tramnguyen2706" 
                                publicId="accessories/187591410"
                                loading="lazy">
                              </Image>
                              <a href={`/product/`}>
                                <button className="view-detail"> <i class="fas fa-arrow-right"></i> </button>  
                              </a>  
                            </div>
                          {/* // )) : 
                        // <div> <span> You do not have any Saved Item or Product in {category} category </span></div>   */}
                      {/* } */}
                    </div>
                   </Collapsible>
                   {/* <img src="https://res.cloudinary.com/tramnguyen2706/image/upload/v1652724470/accessories/187591410.jpg"></img> */}
                  </>
                  )
                  )
                }
                 {/* <div className="category-item">
                  {(productData.products.filter(product => product.pcategory === category).length !== 0) ?
                      productData.products.filter(product => product.pcategory === category).map((pro) => (
                        <div className="item-box">
                          <img src={pro.product_image} alt={pro.product_name} onClick={() => addProductToSet(pro)}></img>
                          <a href={`/product/${pro.product_id}`}>
                            <button className="view-detail"> <i class="fas fa-arrow-right"></i> </button>  
                          </a>  
                        </div>
                      )) : 
                    <div> <span> You do not have any Saved Item or Product in {category} category </span></div>  
                  }
                </div> */}
              </div>
            ))}
          </div>
           
          
        </div>

        <div className="left-content">
          <div className="outfit-look">
          </div>
        </div>

        <div className="content-right">
          <div className="item-inoutput-list">
            {categoryData.map((cates) => (
                <div className="cate-content">
                <div className="cate-name">{cates}</div>
                  <div className="cate-item">
                     {(productData.products.filter(product => product.pcategory == cates).length != 0) ?
                      productData.products.filter(product => product.pcategory == cates).map((pro) => (
                        
                        <div className="item-box">
                          <img src={pro.product_image} onClick={() => addProductToSet(pro)}></img>
                          <a href={`/product/${pro.product_id}`}>
                            <button className="view-detail"> <i class="fas fa-arrow-right"></i> </button>  
                          </a>  
                        </div>
                       
                      )) : 
                    <div> <span> You do not have any Saved Item or Product in {cates} category </span></div>  
                  }
                  </div>
              </div>
            ))}

          </div>
           
          
        </div>
      </div>
    </div>
    </>
  );
}

export default VirtualRecommendScreen;

