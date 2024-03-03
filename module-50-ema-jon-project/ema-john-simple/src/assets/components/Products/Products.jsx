import React from "react";
import "./Products.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Products = (props) => {
  console.log(props.product);

  const { name, price, ratings, img, seller } = props.product;
  const handelAddToCard = props.handelAddToCard;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Seller {seller}</p>
        <p className="product-ret">Ratings {ratings}</p>
      </div>
      <button
        onClick={() => handelAddToCard(props.product)}
        className="btn-card ">
        Add To Card 
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </button>
    </div>
  );
};

export default Products;
