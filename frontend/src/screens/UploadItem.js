import React, { useState } from 'react'
import { Button, FormControl, Select, InputLabel, MenuItem, TextField, TextareaAutosize, InputAdornment, Input, FormHelperText, IconButton} from '@material-ui/core';
import '../styles/uploadItem.scss'
import NavBar from '../components/NavBar'
import uploadImage from '../images/outfit4.jpg'
import UploadAndDisplayImage from './UploadAndDisplayImage'
import editTool from '../images/edit-tool.svg'
import html2canvas from 'html2canvas'

export default function UploadItem() {
  const [category, setCategory] = React.useState();
  const [color, setColor] = React.useState();
  const [pattern, setPattern] = React.useState();
  const [material, setMaterial] = React.useState();
  const [occassion, setOccasion] = React.useState();

  const categories = ["Shirt", "Dress", "Pants", "Skirt", "Shoes"];
  const cols = ["Cream", "Beige", "Light Gray", "Black", "White", "Camel", "Brown", "Khaki", "Navy", "Silver", "Colorful"];
  const patterns = ["Solid", "Checked", "Striped", "Graphic", "Dotted", "Animal Print", "Floral", "Other"];
  const materials = ["Cotton", "Linen", "Polyester", "Knit, Wool", "Fur", "Tweed", "Denim", "Leather", "Silk", "Other"];
  const occassions = ["Daily", "Go to school", "Office/Work", "Date", "Formal", "Travel", "Party", "Other"];
  
  const [isPending, setIsPending] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [values, setValues] = React.useState({
    // category: '',
    price: '',
    pname: '',
    pimage: 'No Image',
    pdescription: ''
    // showPassword: false,
  });


  React.useEffect(() => {
    if (isNaN(values.price)) {
      // alert("Must input numbers");
      setErrorMessage(
        "The input must be a number"
      );
    }
  }, [values.price]);

  React.useEffect(() => {
    if (isNaN(values.price) && errorMessage) {
      setErrorMessage("");
    }
  }, [values.price, errorMessage]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function doCapture(){
     return html2canvas(document.getElementsByClassName("image-import")[0]).then(
       function (canvas){
        console.log("Canvas: ",canvas.toDataURL("image/jpeg", 0.9));
        return canvas.toDataURL("image/jpeg", 0.9);}).catch(e => console.log(e)); 
    ;
  }

  const handleSubmit = async (e) => {
    const set_image = await doCapture();
    const item = {
      "product_name": values.pname, 
      "product_image": set_image,
      "product_description": values.pdescription,
      "product_price": values.price,
      "pcategory": category.props.value,
      "pcolor": color.props.value,
      "ppattern": pattern.props.value,
      "pmaterial": material.props.value,
      "poccassion": occassion.props.value,
      "pavailable": "true",
      "pphotosup": ""};

    e.preventDefault();
    setIsPending(true);
    console.log("Fetch Data:", item);
    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(item)
    }).then(() => {
      console.log("New product added");
      alert("New product is added successfully !");
      setIsPending(false);
    })
  }

  return (
    <>
      <NavBar />
      <div className="content-max-width">
        <div className="upload-item">
          <div className="image-import">
          <UploadAndDisplayImage />
            {/* myChange= {handleChange('pimage')}>
            {console.log("From upload:", values.pimage)}
            </UploadAndDisplayImage> */}
        
          {/* <img src={uploadImage} alt="upload-image"></img> */}
          {/* <button class="withicon-btn"><i class="fas fa-pen"></i> Edit</button> */}
          
          </div>
          <div className="upload-info">
            <div className="title-components">
              <div className="title">Upload items</div>
              {/* <div className="auto-crop">
                Auto crop
                <i class="fas fa-toggle-on"></i>
              </div> */}
            </div>

            <div className="upload-select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e, category) => setCategory(category)}>
                  {categories.map((c) => {
                    return <MenuItem value={c}>{c}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="upload-select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  label="Color"
                  onChange={(e, color) => setColor(color)}>
                  {cols.map((col) => {
                    return <MenuItem value={col}>{col}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="upload-select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Pattern</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pattern}
                  label="Pattern"
                  onChange={(e, pattern) => setPattern(pattern)}>
                  {patterns.map((p) => {
                    return <MenuItem value={p}>{p}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="upload-select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Material</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={material}
                  label="Material"
                  onChange={(e, material) => setMaterial(material)}>
                  {materials.map((m) => {
                    return <MenuItem value={m}>{m}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="upload-select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Occassions</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={occassion}
                  label="Occassion"
                  onChange={(e, occassion) => setOccasion(occassion)}>
                  {occassions.map((o) => {
                    return <MenuItem value={o}>{o}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="upload-select">
              <TextField helperText="Describe briefly about item" id="standard-basic" label="Product's name" variant="standard" 
                   onChange={handleChange('pname')}/>
            </div>

            <div className="upload-select">
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  onChange={handleChange('price')}
                  value={values.price}
                  error={isNaN(values.price)}
                  id="outlined-error"
                  helperText={errorMessage}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <FormHelperText> Input number only</FormHelperText>
              </FormControl>
            </div>

            <div className="upload-select">
              <InputLabel id="demo-simple-select-label">Description</InputLabel>
              <TextareaAutosize
                aria-label="minimum height"
                resize="none"
                value={values.pdescription}
                minRows={3}
                placeholder="Describe item in detail"
                onChange={handleChange('pdescription')}
                style={{ width: 400 }}/>
            </div>

            <div class="button-action">
              <button className="secondary-btn"> DISCARD</button>
              {/* <button> POST ITEM </button> */}
              {!isPending && <button onClick={handleSubmit}> POST ITEM </button>}
              {isPending && <button disabled onClick={handleSubmit}> POSTING...</button>}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}