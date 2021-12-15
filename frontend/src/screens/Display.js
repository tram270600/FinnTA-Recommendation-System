import React, { Component, useState } from 'react';
import '../styles/Display.scss';
import data from '../data/products';

const Display = () => {
    const [saved_id, set_saved_id] = useState(null);
    const [owner_id, set_owner_id] = useState(null);
    const [saved_img, set_saved_img] = useState(null);
    const [saved_name, set_saved_name] = useState(null);
    var numberOfSavedItem = 0;

    const handleSaveItem = (savedItem) => {
        numberOfSavedItem ++;
        set_saved_id("1");
        set_owner_id(savedItem.product_id);
        set_saved_img(savedItem.product_image);
        set_saved_name(savedItem.product_name);
        const item = {id, productID, img, name};
        
        fetch('http://localhost:8000/setClothes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item),
        }).then(() => {
            console.log('new Saved Item added');
        })
    }
 
    return (
        <>
            {/* Menu */}
            <div className="Menu">
                <ul className='NavMenu dash'>
                    <li className='MenuItems'>
                        <a href="#" className='MenuLinks' id="other">
                            Saved
                        </a>
                    </li>
                    <li className='MenuItems'>
                        <a href="#" className='MenuLinks' id="current">
                            Products
                        </a>
                    </li>
                    <li className='MenuItems'>
                        <a href='#' className='MenuLinks' id="other">
                            Styles
                        </a>
                    </li>
                </ul>
            </div>
            {/* Display */}
            <div className="DisplayScreen">
                {data.products.map((productDisplay) => (
                    <div className="item">
                        <img src={productDisplay.product_image} alt="Norway" className="picture" />
                        <div className="detail">
                            <div className = "info">
                                <p className="name">
                                    {productDisplay.product_name}
                                </p>
                                <p className="description">
                                    {productDisplay.product_description}
                                </p>
                                <p className="price">
                                    {productDisplay.product_price}
                                </p>
                            </div>

                            <div className ="button">
                                {productDisplay.product_id === "1" && (
                                    <a href ={"/editpost/" + productDisplay.product_id} className="edit">Edit</a>
                                )}

                                {productDisplay.product_id === "2" && (
                                    <a className="edit"
                                        onClick={() => handleSaveItem(productDisplay)}>Collect</a>)}
                                {/* <a href ={"/editpost/" + productDisplay.product_id} className="edit">Edit</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Display;