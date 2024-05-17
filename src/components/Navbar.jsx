import "./styles/Navbar.css";
import burgerLogo from "./styles/images/burger-logo.png";
import React from "react";
import Login from "./Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <div className="Toolbar">
          <nav className="bg_space">
            <img src={burgerLogo} alt="myBurger" className="logo_img_size" />
          </nav>
          <ul className="navigation_items">
            <li className="NavigationItem__NavigationItem__3YSjr">
              <NavLink
                className="Navigationitem"
                activeClassName="active"
                exact
                to="/"
              >
                Burger Builder{" "}
              </NavLink>
            </li>
            <NavLink className="Navigationitem" to="/login">
              <li className="NavigationItem__NavigationItem__3YSjr">Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
