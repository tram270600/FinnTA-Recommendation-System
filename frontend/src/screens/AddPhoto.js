import React, { useState } from "react";
import '../styles/addPhoto.scss';
import union from '../images/Union.svg'
function removeDummy() {
  var elem = document.getElementsByClassName('add-supply-img');
  elem[1].setAttribute('id','dm');
  // for (var i = 0; i < elem.length;  i++) {
  //   elem[i].setAttribute('id','dm');
  // }
  return false;
}
function addDummy(){
  var elem = document.getElementsByClassName('add-supply-img');
  elem[1].removeAttribute("id"); 
  // for (var i = 0; i < elem.length;  i++) {
  //   elem[i].removeAttribute("id"); 
  // }
}

const AddPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="custom-add">
      {selectedImage && (
        <div>
        <img className="photosup" alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <button className="delete-photosup" 
        onClick={()=>setSelectedImage(null)}
        // onClick={() => [setSelectedImage(null), addDummy()]}
        ><i class="fas fa-times"></i></button>
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
          // removeDummy();
        }}
      />
      <img src={union}></img>
    </div>
  );
};

export default AddPhoto;