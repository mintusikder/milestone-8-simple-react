import React from "react";
import './Products.css'
const Products = (props) => {
  console.log(props.product);
  const { name, price, quantity, ratings, img,seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
    </div>
  );
};

export default Products;
