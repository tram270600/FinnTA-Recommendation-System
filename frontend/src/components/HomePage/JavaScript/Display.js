import React, { Component } from 'react';
import 'w3-css/w3.css';
import '../css/Display.scss';
import data from '../../../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Display = () => {
    return (
        <>
            {/* Menu */}
            <div className="Menu">
                <ul className='NavMenu dash'>
                    <li className='MenuItems'>
                        <a href="#" className='MenuLinks'>
                            Saved
                        </a>
                    </li>
                    <li className='MenuItems'>
                        <a href="#" className='MenuLinks'>
                            Products
                        </a>
                    </li>
                    <li className='MenuItems'>
                        <a href='#' className='MenuLinks'>
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
                                <button href="#" className="edit">Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Display;