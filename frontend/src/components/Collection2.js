import React, {useState} from 'react'
import productData from '../data/products'
import Product from '../components/Product'
import '../styles/trending.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Collection2() {
    return (
    <div className="content-max-width">
    <div className="trend"><h1>Collection</h1>
        <div className ="contenttrend">Collection of this season, view to renew our outlook</div>
        <div className="all-product">
        {productData.products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
            ))}
        </div>
        </div> 
    </div>
       
    )
}

export default Collection2
