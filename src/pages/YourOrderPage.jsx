import React from "react";
import OrderListItem from "./YourOrderItem";

function YourOrderPage() {
  return (
    <main className="container">
      <div className=" m-3 p-5 ">
        <h1>
          <b>Your Order</b>
        </h1>
      </div>
      <div>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </div>
    </main>
  );
}
export default YourOrderPage;
