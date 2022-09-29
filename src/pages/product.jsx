import React from "react";
import { FiStar } from "react-icons/fi";
function Product() {
  return (
    <div>
      <div className="item mx-5 ">
        <img
          src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/cropped/j4vwgeja6thehccimpbs/onetouch-select-test-strip.png"
          alt=""
        />
        <h5>Product 1</h5>
        <p>OneTouch Select Test Strip</p>
      </div>
      <div className="rate d-flex gap-2 mx-5">
        <div className="rating bg-primary">
          <span>
            <FiStar />
          </span>{" "}
          <p>4.1</p>
        </div>
        <div>
          <p>40%OFF</p>
        </div>
      </div>

      <div className="rate mx-5">
        <p>
          <strike>$199</strike> $69
        </p>
      </div>
    </div>
  );
}
export default Product;
