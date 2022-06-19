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
// import Resizable from 're-resizable'
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";

// Import image
import emptyClothing from '../images/emptyClothing.svg'
import { image } from 'cloudinary/lib/cloudinary';

// Tab Switch Panel
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

function VirtualRecommendScreen(props) {
  const account = accountData.accounts.find(x => x.account_id === props.match.params.account_id);
  const product_idList = [];
  const [set_name, setName] = useState("Collection's item");
  const [owner_id, setOwner] = useState(1);
  const [set_img, setImage] = React.useState("");
  const [isPending, setIsPending] = useState(false);
  const [categories, setCategory] = useState(null);
  const [findProductById, setFindProductById] = useState("");
  const [tabSwitch, setTabSwitch] = React.useState('1');

  const [query, setQuery] = useState()
  const [search, setSearch] = useState("")
  const [isLoadingSearch, setLoadingSearch] = useState(false)

  const _ = require("lodash");  

  const handleTabSwitch = (event, newValue) => {
    setTabSwitch(newValue);
  };

    // Initialize as array
  const [antecedents, setAntecedents] = useState([]);
  const [cons, setConsequents] = useState([]);


  // Initialize as object
  const [data, setData] = useState({});
  const [imagePath, setImagePath] = useState({});
  const showCategory = async (subcategory) => {
    // relative path, not specify localhost:3001/api/images because we using proxy configuration
    try { 
      const res = await fetch(`/api/images/${subcategory}`);
      const dataCate = await res.json();
      // console.log(dataCate);
      setData(data => ({
        ...data,
        [subcategory]: dataCate
      }));
    } catch (error) {
      console.error(error)
    }
  }

  const addAntecedent = (imageId) => {
    const item = imageId.substring(imageId.indexOf('/') + 1);
    try { 
      setAntecedents(antecedents => {
        const result = [...antecedents,item];
        
        return result;})
    } catch (error) {
      console.error(error)
    }
    
    // if (antecedents && antecedents.length !== 0) {
    //   findMatchingItem(antecedents);
    // };
  }
  // Wrong if print antecedent inside the addAntecedent -> not asynronize
  // console.log(antecedents); // Correct

  // useEffect(() => {
  //   console.log('Image Capture', set_img);
  // }, [set_img])

  useEffect(()=> {
    fetch('http://localhost:8000/groupCategory')
    .then(res => {
      return res.json()
    })
    .then(data => {
      // console.log("Fetch Category Data", data);
      setCategory(data);
    })
  }, [])

  const findMatchingItem = (antecedents) => {
    console.log("Given Antecedents: ", antecedents);

    if (!Array.isArray(antecedents) || antecedents?.length === 0){
      return
    }

    const inputItem = antecedents.map(x => "'" + x + "'").toString();
    let antecedentsList = `{${inputItem}}`;
    antecedentsList = antecedentsList.replaceAll(",", ", ");

    console.log("Ua: ", antecedentsList);
    let consUpdate = cons;

    fetch(`http://localhost:8000/mixMatchRule?antecedents=${antecedentsList}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      (data.length > 0) ? console.log("Fetch Association Rule", data) : console.log("There is nothing suit with");
      for (let i = 0; i < data.length; i++){
        const subConsequents = data[i].consequents;
        const arr = subConsequents.substr(2, subConsequents.length - 4).split("', '").map(el => parseInt(el))

        let indexExistRule = -1;
        cons?.map((single, index) => {
          console.log("Rule", single, "at:", index);
          if(JSON.stringify(single) === JSON.stringify(arr)){
            console.log("TRUNG NE");
            consUpdate = consUpdate?.filter(e => JSON.stringify(e) !== JSON.stringify(arr))
            console.log("Update filter out: ", consUpdate);
            setConsequents(cons => {
              if (JSON.stringify(consUpdate[0]) !== JSON.stringify(arr)){
                const result = [arr,...consUpdate];
                consUpdate = result;
                console.log("ADD AFTER FILTER: ", result) //Same with correct
                return result;
              } 
              else {
                const result = [...consUpdate];
                return result;
              }
            });
            indexExistRule = index;
            return index;
          }
        })

        if(indexExistRule === -1){
          setConsequents(cons => {
            const result = [arr,...cons];
            console.log("result: ", result) //Same with correct
            return result;
          });
        }
      }
      // console.log("Consequent: ", cons) Wrong
    })
  }

  // console.log("Consequent: ", cons) //Correct
  useEffect(() => findMatchingItem(antecedents), [antecedents]);


  const findPath = () => {
    let pathImage = '';
    if (!cons || cons?.length === 0){
      return
    }
    cons && cons.map((consequent, index) => {
      return consequent && consequent.map((c) => {
        fetch(`http://localhost:8000/itemServer?item_id=${c}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          pathImage = `${data[0].semantic}/${c}`;
          setImagePath(imagePath => ({
            ...imagePath,
            [c]: pathImage
          }));
        })
      return imagePath;
      })
    })
    return pathImage;
  }

  useEffect(findPath, [cons]);

// GET /resources/:resource_type/tags/:tag
// https://api.cloudinary.com/v1_1/{{cloud_name}}/tags/:resource_type


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
    }
  }

  function addProductToSet(props) {
    const image = props.product_image;

    const node = document.createElement("div");
    node.innerHTML = "<div id='mixmatch"+props.product_id+"'><div id='mixmatchheader'></div><button class='delete-photosup"+props.product_id+"'><i class='fas fa-times'></i></button><img src="+ image +" alt='hello'></img></div>"
    document.getElementsByClassName("outfit-look")[0].appendChild(node);

    document.getElementsByClassName(`delete-photosup${props.product_id}`)[0].addEventListener("click",() => deleteSelectItem(props.product_id));
    
    product_idList.push(props.product_id);
    addDragEnable('mixmatch');
  }

  function addDragEnable(divName){
    product_idList.forEach(function(item, index, array) {
      console.log(item, index)
      dragElement(document.getElementById(`${divName}`+item));
    })
  }

  const deleteSelectItem = (deleteItem) => {
    var index = product_idList.indexOf(deleteItem);
    console.log("Item to delete: ",deleteItem);

    // Check whether product can be mix n match
    if (deleteItem.indexOf('/') !== -1){
      const item = deleteItem.substring(deleteItem.indexOf('/') + 1)
      setAntecedents(antecedents.filter(antecedent => antecedent !== item))
      setConsequents([]);
      console.log(antecedents);
      findMatchingItem(antecedents);
    }
    
    //Remove item from selected item list
    if (index !== -1) {
        product_idList.splice(index, 1);
    }
    var element = document.getElementById('mixmatch' + deleteItem ); // will return element
    element.parentNode.removeChild(element); // will remove the element from DOM
  }

  //function for button
  function restart(){
    document.getElementsByClassName("outfit-look")[0].innerHTML = "";
     product_idList.forEach(function(item, index, array) {
      product_idList.pop(item);
    })
    setAntecedents([]);
    setConsequents([]);
    setImagePath({});
  }

  //Capture image of new Set
  async function doCapture(){
    await hiddenCloseOnItem();
     return html2canvas(document.getElementsByClassName("outfit-look")[0]).then(
       function (canvas){
        setImage(canvas.toDataURL("image/jpeg", 0.9));
        set_img !== "" && console.log("In Capture return pciture: ", set_img);
        return canvas.toDataURL("image/jpeg", 0.9);}).catch(e => console.log(e)); 
    ;
  }

  async function hiddenCloseOnItem(){
      const element = document.querySelectorAll("[class*=delete-photosup]");
      return element.forEach(e => e.style.visibility = "hidden");
  }

  function addProductToMixMatch(props) {
    const imageId = props
    console.log(props);
    const image = `<img src = http://res.cloudinary.com/tramnguyen2706/image/upload/v1/${imageId} alt='productPic'></img>`

    const node = document.createElement('div');
    node.innerHTML = "<div id='mixmatch"+imageId+"'><div id='mixmatchheader'></div><button class='delete-photosup"+imageId+"'><i class='fas fa-times'></i></button>"+ image +"</div>"
    document.getElementsByClassName("outfit-look")[0].appendChild(node);
    document.getElementsByClassName(`delete-photosup${imageId}`)[0].addEventListener("click",() => deleteSelectItem(imageId));
    
    product_idList.push(imageId);
    addDragEnable('mixmatch');
    addAntecedent(imageId);
  }

  //Captialize Category group's name
  function capitalize(s)
  {
    return s && s[0].toUpperCase() + s.slice(1);
  } 

  const searchProductById = (keywordSearch) => {
    setFindProductById("");
    if (!keywordSearch) return;

    let pathImage = '';
    console.log("Recieve keyword: ", keywordSearch);
    fetch(`http://localhost:8000/itemServer?item_id=${keywordSearch}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      pathImage = data[0]?.semantic ? `${data[0]?.semantic}/${keywordSearch}` : null;
      setFindProductById(pathImage);
    })
    console.log("Found item", findProductById);
    return pathImage;
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
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabSwitch}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabSwitch} aria-label="lab API tabs example" indicatorColor="primary">
                <Tab label="My Closet" value="1" />
                <Tab label="All Product" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
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
                          )) : <div> <span> You do not have any Saved Item or Product in {cates} category </span></div>  
                      }
                      </div>
                  </div>
                ))}
              </div>
            </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="item-inoutput-list">
                <div class='search-bar-item'>
                  <input type="text" name="search" id="search" size="20px" placeholder="Search Product ID..."
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }} required />

                    <div className='search-button' onClick={() => {
                      searchProductById(query)
                      if (!isLoadingSearch)
                      setSearch(query)
                    }}>
                      <i class="fas fa-search"></i>
                    </div>
                </div>
                {((findProductById) && (findProductById != null)) && 
                    <>
                    <div className='category-item'>
                      <div className="item-box" onClick={() => addProductToMixMatch(findProductById)}>
                        <Image 
                          key={findProductById}
                          cloudName="tramnguyen2706" 
                          publicId={findProductById}
                          loading="lazy">
                        </Image>
                        <a href={`/product/`}>
                          <button className="view-detail"> <i class="fas fa-arrow-right"></i> </button>  
                        </a>  
                      </div>
                    </div>
                    </>
                }
                {(findProductById == null) && 
                <>
                  <div className='noResult'> 
                  <i class="fas fa-exclamation-circle"></i>
                  <div> Not found product with the keyword <strong> {query} </strong></div>
                  <div> Please try another item </div> 
                  </div>
                </>
                }

                {categories && Object.keys(categories[0]).map((category) => (
                  <div className="category-content">
                    <div className="category-heading">
                      <div className="category-name">{capitalize(category)}</div>
                      <div className="category-amount-component">({categories[0][category].length})</div>
                    </div>
                    {categories[0][category].map((subcategory,index) => 
                    {
                      const indexOfCategory = subcategory[0];
                      const categoryName = subcategory[1];
                      return  (<>
                      <Collapsible showCategory={e => showCategory(categoryName)} key={indexOfCategory} title = {capitalize(subcategory[1])} defaultExpanded="false"> 
                        <div className="category-item">
                          {data[categoryName] ? data[categoryName].map((imageId, index) => (
                            <div className="item-box" onClick={() => addProductToMixMatch(imageId)} >
                              <Image 
                                key={imageId}
                                cloudName="tramnguyen2706" 
                                publicId={imageId}
                                loading="lazy">
                              </Image>
                              <a href={`/product/`}><button className="view-detail"> <i class="fas fa-arrow-right"></i> </button></a>  
                            </div>
                          )): <div> <span> Loading product in <strong>{capitalize(categoryName)} category</strong> </span></div>}
                        </div>
                      </Collapsible>
                      </>
                    )})}
                  </div>
                ))}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
  
        </div>

        <div className="mixmatch-content">
          <div className="outfit-look">
          </div>
        </div>

        <div className="content-right">
          <div className="item-inoutput-list">
            {(cons && cons.length !== 0) ? cons.map((consequent, index) =>
            {
            return <>
              <div className="cate-content">
                <div className="cate-name"> Option {index + 1} </div>
                <div className='cate-item-recommend'>
                  {consequent && imagePath && consequent.map((c) => {
                    return<>
                    <div className='category-item'>
                      <div className="item-box" onClick={() => addProductToMixMatch(imagePath[c])}>
                      <Draggable>
                          <Resizable>
                          <Image 
                          key={imagePath[c]}
                          cloudName="tramnguyen2706" 
                          publicId={imagePath[c]}
                          loading="lazy">
                          </Image>
                          </Resizable>
                        </Draggable>
                        <a href={`/product/`}>
                          <button className="view-detail"> <i class="fas fa-arrow-right"></i> </button>  
                        </a>  
                      </div>
                    </div>
                    </>
                  }
                  )}
                </div>
              </div>
            </>
            }) : 
            <div className='emptyState'>
              <div className='dot'>
                <img src={emptyClothing}  alt="" height="150px" width="150px"/>
              </div>
              <div className='noResult'> 
              There is no result with the combination <strong> {antecedents} </strong>
              <div> Please try another item </div>
              </div>
            </div>
             }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default VirtualRecommendScreen;

