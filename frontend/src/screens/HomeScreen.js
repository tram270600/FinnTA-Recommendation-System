import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductDetail from './ProductDetailScreen'
import Product from '../components/Product'
import productData from '../data/products'
import Trending from '../components/Trending'
import Collection2 from '../components/Collection2'
// import Collection from '../components/Collection'
import { Slider } from '@mui/material'
import '../App css cua dit.css'
export default function Homecreen(){
  return (
    <>
      <NavBar />
    {/* <Slider/> */}
    <Trending/>
    <Collection2/>
      <Footer />
    </>
  );
  
}