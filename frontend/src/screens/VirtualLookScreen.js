import React from 'react'
import { useContext, useCallback, useRef, useState, CanvasContext } from 'react';
import { IKImage, IKContext, IKUpload} from 'imagekitio-react';

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
import html2canvas from 'html2canvas';

import avatar from '../images/avatar.png'
import data from '../data/accounts'


//Import Image
// import photoItem from '../images/donut1.jpg'
import photoItem from '../images/outfit4.jpg'
import Item from '../components/Item'

//Import data
// import setClothes from '../data/setClothes.json';

function VirtualLookScreen(props) {
  const account = accountData.accounts.find(x => x.account_id === props.match.params.account_id);
  const photoSupple = "../images/outfit4.jpg";
  const product_idList = [];
  const [set_name, setName] = useState("Collection's item");
  const [owner_id, setOwner] = useState(1);
  const [set_img, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    doCapture();
    const set = {set_img, owner_id, set_name, product_idList};
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


  // console.log("Account ID:", props.match.params.account_id);

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
    console.log("Click on: ", props.product_id);
    const image = props.product_image;
    // console.log(document.getElementsByClassName("product-image"))
    
    document.getElementsByClassName("product-image")[0].innerHTML +=
    "<div id='mydiv"+props.product_id+"'><div id='mydivheader'></div><button class='delete-photosup"+props.product_id+"'><i class='fas fa-times'></i></button><img src="+ image +" alt='hello'></img></div>"
   
    console.log("CLM", document.getElementsByClassName("delete-photosup"+props.product_id+""), "delete-photosup"+props.product_id+"");
    document.getElementsByClassName("delete-photosup"+props.product_id+"")[0].addEventListener("click",deleteSelectItem(props.product_id));
    
    product_idList.push(props.product_id);
    addDragEnable();
  }

  function addDragEnable(){
    product_idList.forEach(function(item, index, array) {
      console.log(item, index)
      dragElement(document.getElementById("mydiv"+item));
    })
  }
  const deleteSelectItem = (deleteItem) => () => {
    var index = product_idList.indexOf(deleteItem);
    console.log("Clikckkkk function with index of product: ", deleteItem, "at index in array:", index);

    //Remove item from selected item list
    if (index !== -1) {
        product_idList.splice(index, 1);
    }
    var element = document.getElementById('mydiv' + deleteItem ); // will return element
    console.log("Element: ", element, "with parent: ", element.parentNode);
    element.parentNode.removeChild(element); // will remove the element from DOM

    // product_idList.forEach(function(item, index, array) {
    //   console.log(item, index)
    // })
    // console.log("New length:",product_idList.length);
  }

  //function for button
  function restart(){
    document.getElementsByClassName("product-image")[0].innerHTML = "";
     product_idList.forEach(function(item, index, array) {
      product_idList.pop(item);
    })
  }
  //Capture image of new Set
  function doCapture(){
    html2canvas(document.getElementsByClassName("product-image")[0]).then(function (canvas){
      console.log(canvas.toDataURL("image/jpeg", 0.9));
      saveAs(canvas.toDataURL(), 'canvas.jpg');
      setImage(canvas.toDataURL());
    });
    console.log(product_idList);
  }
  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
       link.href = uri;
       link.download = filename;

       //Firefox requires the link to be in the body
       document.body.appendChild(link);

       //simulate click
       link.click();

       //remove the link when done
       document.body.removeChild(link);
    } else {
       window.open(uri);
    }
    console.log("Download successfully");
 }

  // if (!account){
  //   return <div> Account Not Found</div>
  // }
  
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="left-content">
          <div className="product-image">
     
              
          </div>
          <div className="action-btn">
            <button className="secondary-btn" onClick={() => restart()}> RESTART </button>
            {/* {!isPending && <button onClick={() => doCapture()}> POST OUTFIT</button>} */}
            {!isPending && <button onClick={handleSubmit}> POST OUTFIT</button>}
            {isPending && <button disabled onClick={handleSubmit}> POSTING...</button>}
          </div>
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
                     {(productData.products.filter(product => product.pcategory == cates).length != 0) ?
                      productData.products.filter(product => product.pcategory == cates).map((pro) => (
                        
                        <div className="item-image">
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

export default VirtualLookScreen;

