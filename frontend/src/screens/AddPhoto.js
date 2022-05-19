import React, { useState } from "react";
import '../styles/addPhoto.scss';
import union from '../images/Union.svg'

function removeBorder(event) {
  // var elem = document.getElementsByClassName('add-supply-img');
  // elem[1].setAttribute('id','dm');
  event.target.setAttribute('id', 'dm');
  // console.log(event.target);
  // for (var i = 0; i < elem.length;  i++) {
  //   elem[i].setAttribute('id','dm');
  // }
  return false;
}
function addBorder(event){
  const specific = event.target.parentElement.parentElement;
  console.log("In add: ", specific, "and click on: ", event.target, "nodeName:", event.target.nodeName);
  if (event.target.nodeName == "I") {
    console.log("you click i");
    specific.parentElement.getElementsByClassName('add-supply-img')[0].removeAttribute("id");
  }
  else specific.getElementsByClassName('add-supply-img')[0].removeAttribute("id");
}

const AddPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="custom-add">
      {selectedImage && (
        <div>
        <img className="photosup" alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <button className="delete-photosup" 
        // onClick={()=>setSelectedImage(null)}
        onClick={(e) => [setSelectedImage(null), addBorder(e)]}
        ><i className="fas fa-times"></i></button>
        </div>
      )}
      <input
        style = {{color: "#FFF"}}
        type="file"
        // id="dm"
        className="add-supply-img"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          removeBorder(event);
        }}
      />
      <img src={union}></img>
    </div>
  );
};

export default AddPhoto;