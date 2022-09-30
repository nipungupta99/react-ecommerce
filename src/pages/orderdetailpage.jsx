import React from "react";
import ProductViewBar from "./productviewbar";

function OrderDetailPage() {
  return (
    <main className="container">
      <div className="d-flex h-100">
        <section className=" w-75">
          <div className=" m-3 p-3">
            <h1>Order Details</h1>
            <div>
              <h5>delivered</h5>
              <h6>month,year</h6>
            </div>
          </div>
          <ProductViewBar />
          <ProductViewBar />
          <ProductViewBar />
        </section>

        <section className=" w-25">
          <div className="  m-2">
            <h2>Price Details</h2>
          </div>

          <div className=" m-2">
            <h6>Subtotal</h6>
            <h6>Delivery Charges</h6>
            <h6>Discount</h6>
            <br />
            <h6>total</h6>
          </div>
          <div className=" p-3 m-2 ">
            <h6>Payment Mode Cash</h6>
          </div>
          <div className="m-2 p-1 product-view-delivery-bar h-25">
            <h4>delivery details</h4>
            <h4>address</h4>
            <h6>P-7,100th floor private colony sri niwas puri, new delhi-64</h6>
            <h4>delivery date</h4>
            <h6>kal subha 10 baje tak</h6>
          </div>
        </section>
      </div>
    </main>
  );
}
export default OrderDetailPage;
