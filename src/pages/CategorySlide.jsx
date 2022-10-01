import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

function CategorySlide() {
  return (
    <div className=" p-2 m-2">
      <div>
        <img
          className="w-100 h-50"
          src="https://www.gelita.com/sites/default/files/inline-images/ITF271066.png"
          alt="image not found"
        />
      </div>

      <div className="w-100  text text-center">
        <h3>name</h3>
        <p>discribe</p>
        <h6>rating/4%</h6>
      </div>
    </div>
  );
}
export default CategorySlide;
