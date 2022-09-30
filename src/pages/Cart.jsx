import React from "react";
import "../styles/Cart.scss";
import { BsCartDash } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { BiNavigation } from "react-icons/bi";
import Cartproduct from "./Cartproduct";
function cart() {
  return (
    <div className="cart d-flex ">
      <div>
        <div>
          <div className="yourcart d-flex ">
            <span>
              <BsCartDash size={42} />
            </span>
            <h1>Your Cart</h1>
          </div>
        </div>
        <Cartproduct />
        
        <Cartproduct />
        <Cartproduct />
        <Cartproduct />
        <Cartproduct />
      </div>

      <div >
        <div>
          <div className="price_details">
            
              <h3 className="m-0">
                <span>
                  <SiCashapp className="mb-2" />
                </span>
                PRICE DETAILS
              </h3>
            
          </div>
          <br />

          <div>
            <div className="amount d-flex  ">
              <div>
                <h6>Subtotal</h6>
              </div>
              <div>
                <h6>$199</h6>
              </div>
            </div>

            <div className="amount d-flex ">
              <div>
                <h6>Dilivery Charge</h6>
              </div>
              <div>
                <h6>$199</h6>
              </div>
            </div>

            <div className="amount d-flex ">
              <div>
                <h6>Discount</h6>
              </div>
              <div>
                <h6>$199</h6>
              </div>
            </div>
            <div>----------------------------------------</div>
            <div className="amount d-flex ">
              <div>
                <h6>Total</h6>
              </div>
              <div>
                <h6>$199</h6>
              </div>
            </div>
            <br />
            <div>
              <button
                className="placeorder"
                type="button"
                class="btn btn-warning"
              >
                PLACE ORDER
              </button>{" "}
            </div>
          </div>
        </div>
        <br />
        <br />

        <div>
          <div className="dilivery ">
          <h3 className="m-0">
                <span>
                  <BiNavigation className="mb-2" />
                </span>
                Delivery Details
              </h3>
          </div>
          <br />
          <div>
            <h5>DILIVER TO</h5>
            <p>
              13, PRESTIGE ELGIN,
              <br />
              KORAMANGALA, BANGALORE
            </p>

            <h5>EXPECTED DELEVERY</h5>
            <p>30 NOVEMBER 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
