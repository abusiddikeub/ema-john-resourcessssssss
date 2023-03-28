import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";

const Shop = (props) => {
  const { img, name, seller, ratings, price } = props.product;

  const handleToCart = props.handleToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">Name :{name}</h6>
        <p>Price : $ {price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratting : {ratings} star</p>{" "}
      </div>
      <button onClick={() => handleToCart(props.product)} className="btn-cart">
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />

      </button>
    </div>
  );
};

export default Shop;
