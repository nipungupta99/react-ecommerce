import React from "react";
import HeaderNavbarCategory from "./HeaderNavbarCategory";
import "../styles/header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <main className="container">
      <section className="d-flex border justify-content-between">
        <div className="">
          <img
            className="header-logo-image"
            src="https://www.organicvedic.in/wp-content/uploads/2020/08/cropped-organic-vedic-logo.png"
            alt="error image not found"
          />
        </div>
        <div>
          <input
            className="header-search-bar mt-1 "
            placeholder="  search ayurvedic product"
            type="search"
          />
          <button className="btn btn-dark mb-1 header-button-search px-5 ">
            <b>Search</b>
          </button>
        </div>
        <div className="d-flex gap-3 ">
          <h6 className=" px-3 py-2 m-1">
            <AiOutlineShoppingCart className="hearder-navbar-icon" />
            <b>Cart</b>
          </h6>
          <h6 className=" px-3 py-2 m-1">
            <FaUserCircle className="hearder-navbar-icon mx-2" />
            <b>Login Id</b>
          </h6>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="d-flex justify-content-center gap-5 w-100">
          <HeaderNavbarCategory />
          <HeaderNavbarCategory />
          <HeaderNavbarCategory />
          <HeaderNavbarCategory />
          <HeaderNavbarCategory />
          <HeaderNavbarCategory />
        </div>
      </section>
    </main>
  );
}
export default Header;
