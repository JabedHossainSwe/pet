import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo"></img>
        <p>Ornof's Pet Store</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="nav_dropdown"
      ></img>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("pets");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/pets">
            Pets
          </Link>
          {menu === "pets" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("cats");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/cats">
            Cat
          </Link>
          {menu === "cats" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("fishs");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/fishs">
            Fish
          </Link>
          {menu === "fishs" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("ducks");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/ducks">
            Duck
          </Link>
          {menu === "ducks" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("blogs");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/blogs">
            Blog
          </Link>
          {menu === "blogs" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="cart_icon"></img>
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
