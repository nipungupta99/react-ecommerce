import React from "react";

function Category(props) {
  return (
    <div>
      <div className="cat mx-4">
        <img
          src={props.heroImageURL}
          alt=""
        />
        <br />
        <br />
        <h5>{props.category}</h5>
      </div>
    </div>
  );
}
export default Category;
