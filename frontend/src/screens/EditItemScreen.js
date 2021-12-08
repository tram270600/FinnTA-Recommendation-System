import React from 'react'
import { MenuItem, Select, TextareaAutosize } from '@material-ui/core'
import NavBar from '../components/NavBar'
//Import Style
import '../styles/productDetail.scss'

//Import Image
import avatar from '../images/avatar.png'
import photo1 from '../images/outfit5.jpg'
import photo2 from '../images/outfit2.jpg'
import photo3 from '../images/outfit6.jpg'

//Import Icon
import expand from '../images/expand.svg'
import chat from '../images/chat.svg'
import collect from '../images/collect.svg'
import union from '../images/Union.svg'

//Import Data
import productData from '../data/products'
import data from '../data/accounts'
import AddPhoto from '../screens/AddPhoto'

function EditItemScreen(props) {
  const categories = ["Shirt", "Dress", "Pants", "Skirt", "Shoes"];
  const cols =["Cream", "Beige", "Light Gray", "Black", "White", "Camel", "Brown", "Khaki", "Navy", "Silver", "Colorful"];
  const patterns = ["Solid", "Checked", "Striped", "Graphic", "Dotted", "Animal Print", "Floral", "Other"];
  const materials = ["Cotton", "Linen", "Polyester", "Knit, Wool", "Fur", "Tweed", "Denim", "Leather", "Silk", "Other"];
  const occassions = ["Daily", "Go to school", "Office/Work", "Date", "Formal", "Travel", "Party", "Other"];

  const product = productData.products.find(x => x.product_id === props.match.params.product_id);
  console.log("Product ID:", props.match.params.product_id);
  const [values, setValues] = React.useState({
    category: product.pcategory,
    color: product.pcolor,
    pattern: product.ppattern,
    material: product.pmaterial,
    occassion: product.poccassion,
    price: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  function enoughPhotoSup(){
    if(product.pphotosup.length == 3) return true;
      else return false;
  }
  const addPhoto = 3 - product.pphotosup.length;

  function getLackPhotoAmount(){
    let content = [];
    for (let i = 0; i < addPhoto; i++) {
      content.push( 
      <AddPhoto/>);
    }
    return content;
  };

  if (!product){
    return <div> Product Not Found</div>
  }
  return (
    <>
    <NavBar />
    <div className="content-max-width">
      <div className="product-content">
        <div className="product-image">
            {/* <img src={product.product_image.default} alt="upload-image"></img> */}
            <img src={product.product_image} alt="upload-image"></img>
            
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
            <div className="title">{product.product_name}</div>
            {/* <div className="title">Product's name</div> */}
            <div className="description">
              {product.product_description}
            </div>
            <div className="price">${product.product_price}</div>
            <button className="mark-sold">MASK AS SOLD</button>
          </div>
            <div className="product-info">
              <div className="addition-info">
                <div className="sub-title">Additional Information</div>
                <div className="sub-info"> 
                    <p> Color </p>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.color}
                      label="Color"
                      onChange={handleChange('color')}>
                      {cols.map((col) => {
                        return <MenuItem value={col}>{col}</MenuItem>
                      })}
                    </Select>
                </div>
                <div className="sub-info"> 
                    <p> Category </p>
                    {/* <span> {product.pcategory} </span> */}
                    <Select className="custome-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder={product.pcategory}
                      value={values.category}
                      label="Category"
                      onChange={handleChange('category')}>
                      {categories.map((c) => {
                        return <MenuItem value={c}>{c}</MenuItem>
                      })}
                    </Select>
                </div>
                <div className="sub-info"> 
                    <p> Pattern </p>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder={product.ppattern}
                      label="Pattern"
                      value={values.pattern}
                      onChange={handleChange('pattern')}>
                      {patterns.map((p) => {
                        return <MenuItem value={p}>{p}</MenuItem>
                      })}
                    </Select>
                </div>
                <div className="sub-info"> 
                    <p> Material </p>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Material"
                      value={values.material}
                      onChange={handleChange('material')}>
                      {materials.map((m) => {
                        return <MenuItem value={m}>{m}</MenuItem>
                      })}
                    </Select>
                </div>
                <div className="sub-info"> 
                    <p> Occassion </p>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.occassion}
                      label="Occassion"
                      onChange={handleChange('occassion')}>
                      {occassions.map((o) => {
                        return <MenuItem value={o}>{o}</MenuItem>
                      })}
                    </Select>
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
              <div className="photo-indicator">
                <div className="sub-title">Supplementary Image</div>
                <div className="amount-photo">
                <span>{product.pphotosup.length}/3</span> images to describe product
              </div>
              </div>
                <div className="group-img">
                  {product.pphotosup.map((photo) => (
                    <div className="supply-img">
                      <img src={photo.default}></img>
                    </div> ))}

                {
                enoughPhotoSup()==false && 
                    getLackPhotoAmount()
                  }
                </div>
              </div>
              <div class="button-action">
              <button className="secondary-btn"> DISCARD</button>
              <button> SAVE CHANGE </button>
            </div>
        </div>
      </div>
    </div>
    </>
     

  );
}

export default EditItemScreen;
