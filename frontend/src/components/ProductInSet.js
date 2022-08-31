const ProductInSet = (props) => {
    const {product} = props;
    return(
        <a href={`/product/${product.id}`}>
        <div className="product-info-detail" key={product.id}>
        {console.log("Sets ne ma: ", product)}
             <div className="product-img">
             <img 
                src={product.product_image} 
                alt={product.product_name}></img>
            </div>

            <div className="namepricedes">
                <div className="product-name">{product.product_name}</div>
                <div className="product-description">{product.product_description}</div>
                <div className="product-price">${product.product_price}</div>
            </div>
        
        </div>
        </a> 
    )
}
export default ProductInSet;