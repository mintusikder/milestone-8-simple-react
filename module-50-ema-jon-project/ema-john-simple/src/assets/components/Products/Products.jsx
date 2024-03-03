import React from "react";
import './Products.css'
const Products = (props) => {
  console.log(props.product);
  const { name, price, quantity, ratings, img,seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
     <div className="product-info">
     <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
      <p className="product-seller">Seller {seller}</p>
      <p className="product-ret">Ratings {ratings}</p>
     </div>
    </div>
  );
};

export default Products;
