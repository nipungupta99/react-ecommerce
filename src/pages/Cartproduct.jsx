import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "../styles/Cart.scss";
import { AiOutlineMinus } from "react-icons/ai";
import {IoAddOutline} from "react-icons/io5";
function Cartproduct() {
  return (
    <div>
    <div className="itemcart d-flex gap-5 pt-5 my-3 ">
      <div>
        <img
          src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/cropped/j4vwgeja6thehccimpbs/onetouch-select-test-strip.png"
          alt=""
        />
      </div>

      <div>
        <h6>multivitamin capsule</h6>
        <p>packet of 12 capsule</p>

        <div className="cartbutton d-flex ">
          <div className="decrease mx-3 ">
            <button type="button"class="decrease_button"><span><AiOutlineMinus/></span></button>
          </div>
          <div className=" mt-1">
            <h5>1</h5>
          </div>
          <div className="increase mx-3">
            <button type="button" class="increase_button"><span><IoAddOutline/></span>
              
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mrp d-flex gap-2">
          <div>
            <strike>$199</strike>
          </div>
          <div>
            <p>$69</p>
          </div>
        </div>

        <div>
          <h5 className="m-0">
            <span>
              <MdOutlineDeleteOutline className="mb-1" />
            </span>
            REMOVE
          </h5>
        </div>
      </div>
      </div>
      <div className="h-line">
        <hr />
      </div>
    </div>
  );
}
export default Cartproduct;
