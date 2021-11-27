import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductDetail from './ProductDetailScreen'
import Product from '../components/Product'
import productData from '../data/products'
export default function ProfileScreen(){
  return (
    <>
      <NavBar />
      {/* {productData.products.map((product) => (
      <ProductDetail key={product.product_id} product={product}></ProductDetail>
    ))} */}
    {productData.products.map((product) => (
      <Product key={product.product_id} product={product}></Product>
    ))}
      <Footer />
    </>
  );
  
}