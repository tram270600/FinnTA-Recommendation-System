import React, { Component, useState } from 'react';
import '../styles/Display.scss';
import data from '../data/products';
import account from '../data/accounts';
import { useParams } from 'react-router-dom';

const Display = () => {
    // const [saved_id, set_saved_id] = useState();
    const [owner_id, set_owner_id] = useState(1);
    const [saved_img, set_saved_img] = useState("");
    const [saved_name, set_saved_name] = useState("");
    const {account_id} = useParams();

    const Owner = account.accounts.find(x => x.account_id === 1);
    var [isOwner, set_isOwner] = useState(Owner.account_id === parseInt(account_id, 10)? true: false);

    // if (Owner.account_id === parseInt(account_id, 10)) {set_isOwner(true)}

    const handleSaveItem = (savedItem) => {
        const product = data.products.find(x => x.product_id === savedItem.product_id);

        set_saved_img("" + product.product_image + "");
        set_saved_name("" + product.product_name + "");
        const item = { owner_id, saved_img, saved_name };

        // if (){

        // }

        fetch('http://localhost:8000/savedClothes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        }).then(() => {
            console.log('new Saved Item added');
            console.log(product);
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
                            <div className="info">
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

                            <div className="button">
                                {isOwner && 
                                    <a href={"/editpost/" + productDisplay.product_id} className="edit">Edit</a>}

                                {!isOwner && 
                                    <a className="edit" onClick={() => handleSaveItem(productDisplay)}>Collect</a>}
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