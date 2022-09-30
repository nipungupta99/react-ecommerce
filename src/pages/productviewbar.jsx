import React from "react";

function ProductViewBar() {
  return (
    <div className="d-flex  border m-3 p-2 justify-content-between">
      <div>
        <h3>order name</h3>
        <h4>variant:color</h4>
        <h5>price</h5>
      </div>

      <div className=" d-flex align-items-center ">
        <button className="btn btn-outline-warning">view product</button>
      </div>
    </div>
  );
}
export default ProductViewBar;
