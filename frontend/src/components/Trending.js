import React, {useState} from 'react'
import productData from '../data/products'
import Product from '../components/Product'
import '../styles/trending.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Trending() {
    return (
    <div className="content-max-width">
    <div className="trend"><h1>Trending Items</h1>
        <div className ="contenttrend">Pick one to buy or saved it to your collection for later Mix n Match</div>
        <div className="all-product">
        {productData.products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
            ))}
        </div>
        </div> 
    </div>
       
    )
}

export default Trending
