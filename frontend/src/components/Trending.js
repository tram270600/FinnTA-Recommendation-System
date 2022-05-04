import React, {useState, useEffect} from 'react'
import productData from '../data/products'
import Product from '../components/Product'
import '../styles/trending.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Trending() {
    const [item, setItem] = useState(null);
    useEffect(()=> {
        fetch('http://localhost:8000/products')
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log("Fetch data from Product", data);
          setItem(data);
        //   console.log("props;", props.match.params.id, "Fetch single", data[props.match.params.id - 1]);
        //   setCollection(data[props.match.params.id - 1])
        })
      }, [])
    return (
    <div className="content-max-width">
    <div className="trend"><h1>Trending Items</h1>
        <div className ="contenttrend">Pick one to buy or saved it to your collection for later Mix n Match</div>
        <div className="all-product">
        {item && item.map((product) => (
            <Product key={product.id} product={product}></Product>
        ))}
        </div>
        </div> 
    </div>
       
    )
}

export default Trending
