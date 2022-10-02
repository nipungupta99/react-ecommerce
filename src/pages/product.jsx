import React,{useEffect, useState} from "react";
import { FiStar } from "react-icons/fi";
import axios from "axios"

function Product(props) {
  
  return (
    <div>
      <div className="item mx-5 ">
        <img
          src={props.heroImageURL}
          alt=""
        />
        
        <h5>{props.category}</h5>
        <p>{props.brand}</p>
      </div>
      <div className="rate d-flex gap-2 mx-5">
        <div className="rating bg-primary">
          <span>
            <FiStar />
          </span>{" "}
          <p>{props.rating}</p>
        </div>
        <div>
          <p>{Math.floor(100 * (props.price - props.discountedPrice)/props.price)}%OFF</p>
        </div>
      </div>

      <div className="rate mx-5">
        <p>
          <strike>{props.price}</strike> {props.discountedPrice}
        </p>
      </div>
    </div>
  );
}
export default Product;
