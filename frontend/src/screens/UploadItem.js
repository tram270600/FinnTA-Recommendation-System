import React from 'react'
import { Button, FormControl, Select, InputLabel, MenuItem, TextField, TextareaAutosize, InputAdornment, Input, FormHelperText, IconButton} from '@material-ui/core';
import '../styles/uploadItem.scss'
import NavBar from '../components/NavBar'
import uploadImage from '../images/outfit4.jpg'
import UploadAndDisplayImage from './UploadAndDisplayImage'
import editTool from '../images/edit-tool.svg'

export default function UploadItem(){
  const [category, setCategory] = React.useState();
  const [color, setColor] = React.useState();
  const [pattern, setPattern] = React.useState();
  const [material, setMaterial] = React.useState();
  const [occassion, setOccasion] = React.useState();

  const categories = ["Shirt", "Dress", "Pants", "Skirt", "Shoes"];
  const cols =["Cream", "Beige", "Light Gray", "Black", "Camel", "Brown", "Khaki", "Navy", "Silver", "Colorful"];
  const patterns = ["Solid", "Checked", "Striped", "Graphic", "Dotted", "Animal Print", "Floral", "Other"];
  const materials = ["Cotton", "Linen", "Polyester", "Knit, Wool", "Fur", "Tweed", "Denim", "Leather", "Silk", "Other"];
  const occassions = ["Daily", "Go to school", "Office/Work", "Date", "Formal", "Travel", "Party", "Other"];
  
  const [errorMessage, setErrorMessage] = React.useState("");
  const [values, setValues] = React.useState({
    // category: '',
    // color: '',
    // pattern: '',
    // material: '',
    // occassion: '',
    price: '',
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

  return (
    <>
      <NavBar />
      <div className="content-max-width">
        <div className="upload-item">
          <div className="image-import">
          <UploadAndDisplayImage/>

          {/* <img src={uploadImage} alt="upload-image"></img> */}
          {/* <button class="withicon-btn"><i class="fas fa-pen"></i> Edit</button> */}
          
          </div>
          <div className="upload-info">
            <div className="title-components">
              <div className="title">Upload items</div>
              <div className="auto-crop">
                Auto crop
                <i class="fas fa-toggle-on"></i>
              </div>
            </div>
           
            <div className="upload-select">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
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
              <TextField helperText="Describe briefly about item" id="standard-basic" label="Product's name" variant="standard" />
            </div>

            <div className = "upload-select">
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
                minRows={3}
                placeholder="Describe item in detail"
                style={{ width: 400 }}/>
            </div>
            <div class="button-action">
              <button className="secondary-btn"> DISCARD</button>
              <button> POST ITEM </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}