import "./styles/Navbar.css";
import burgerLogo from "./styles/images/burger-logo.png";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <div className="toolbar">
          <nav className="burger-logo-area">
            <img src={burgerLogo} alt="myBurger" className="logo-img-size" />
          </nav>
          <ul className="navigation-items">
            <li className="navigation-item">
              <NavLink className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")} to="/">
                Burger Builder
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink
                className={({ isActive }) => (isActive ? "navigation-link active" : "navigation-link")}
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
