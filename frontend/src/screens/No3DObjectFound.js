import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import '../styles/Object3D.scss';
import {useHistory} from "react-router-dom";


const No3DObjectFound = () => {
    const history = useHistory();
    return (
        <>
         <NavBar />
         <div className="title-page">Sorry, we cannot generate 3D object for this product </div>
        <div className="subtitle-page">Please, try another product </div>
        <button style={{textAlign: "center", marginLeft: "45vw" ,marginTop: "20px"}} onClick={() => history.goBack()}>Back to Product</button>
        </>
    );
}

export default No3DObjectFound ;