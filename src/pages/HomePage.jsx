import React from "react";
import "./Homepage.css";
import Product from "./product";
import Category from "./category";
import Recently from "./Recently";
import SimpleImageSlider from "react-simple-image-slider";
function Homepage() {
  const images = [
    {
      url: "https://img.freepik.com/free-psd/medical-horizontal-banner-template_23-2148940482.jpg?w=2000",
    },
    {
      url: "https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000",
    },
    {
      url: "https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000",
    },
  ];

  return (
    <div className="home container">
      <div>
        <SimpleImageSlider
          width={1300}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>{" "}
      <br />
      <br />
      <div className="heading ">
        <h1>India’s Leading Platform for Natural Herbs</h1>
      </div>
      <div className="uppertext">
        <div>
          <h3>Something here.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div>
          <h3>Lowest Prices.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div>
          <h3>Consult a doctor.</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
      <br />
      <div className="toprated ">
        <div className="top ">
          <div className="rated d-flex mx-5">
            <h3>TOP RATED</h3>
          </div>
          <div>
            <button type="button" class="btn btn-warning">
              View all
            </button>
          </div>
        </div>
        <br />
        <br />

        <div className="d-flex ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div>
          <div className="shop d-flex mx-5">
            <h3>SHOP BY CATEGORY</h3>
          </div>
          <br />
          <br />
          <div className="category d-flex mx-4">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="final">
        <div className="recent d-flex mx-5">
          <div>
            <h3>RECENTLY VIEW</h3>
          </div>

          <div>
            <button type="button" class="btn btn-warning">
              View all
            </button>
          </div>
        </div>
        <div className="recentlyview d-flex">
          <Recently />
          <Recently />
          <Recently />
          <Recently />
          <Recently />
          <Recently />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
