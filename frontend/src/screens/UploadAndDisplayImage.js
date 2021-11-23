import React, { useState } from "react";
import '../styles/uploadItem.scss';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [editFunction, enableEditFunction] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}><i class="fa fa-trash"></i>Remove</button>
        <button class="withicon-btn" onClick={()=> enableEditFunction()}><i class="fas fa-pen"></i> Edit</button>
        </div>
      )}

      {editFunction && (
        <div>
        <h2 style={{color: "black"}}> heheh</h2>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        style = {{color: "#DCF9FF"}}
        type="file"
        className="custom-file-input"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;