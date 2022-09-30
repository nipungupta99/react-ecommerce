import React from "react";

function OrderListItem() {
  return (
    <main className="d-flex border m-3 p-2 justify-content-between">
      <section className="w-50">
        <h4>Product name</h4>
        <h6>variant color</h6>
        <h4>prices</h4>
      </section>

      <section className="d-flex w-50 gap-3">
        <div className=" w-100 p-2">
          <div className=" gap-2 p-2 d-flex justify-content-end ">
            <h6 className="w-50">deliverd on 36 feb 2030</h6>
          </div>
          <div className="d-flex gap-3 p-2 ">
            <button className="btn btn-outline-warning w-50 px-5">
              <b>Rate And Review</b>
            </button>

            <button className="btn btn-warning px-5 w-50">
              <b> View Detail</b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default OrderListItem;
