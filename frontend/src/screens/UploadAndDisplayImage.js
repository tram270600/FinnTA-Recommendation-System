import React, { useState } from "react";
import '../styles/uploadItem.scss';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [editFunction, enableEditFunction] = useState(null);
   
  function enableEdit(){
     // When true, moving the mouse draws on the canvas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    // const myPics = document.getElementById('myPics');
    const myPics = document.getElementsByClassName('myPics')[0];
    console.log("dmmdmdmmdmdmd",myPics)
    const context = myPics.getContext('2d');

    // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

    // Add the event listeners for mousedown, mousemove, and mouseup
    myPics.addEventListener('mousedown', e => {
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    myPics.addEventListener('mousemove', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }
    });

    window.addEventListener('mouseup', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });
  }

  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

  return (
    <div>
      {selectedImage && (
        <div className="myPics">
        <img  alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}><i class="fa fa-trash"></i>Remove</button>
        <button class="withicon-btn" onClick={()=> enableEditFunction()}><i class="fas fa-pen"></i> Edit</button>
        <h1>Drawing with mouse events</h1>
        <canvas className="myPics" id="myPics" width="560" height="360"></canvas>
        {enableEdit()}
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