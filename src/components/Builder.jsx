import React, { useState, useEffect } from "react";
import { AddContainers } from "./AddContainers";
import "./styles/Builder.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Builder = ({ setOrderIngredient }) => {
  const price = useSelector((state) => state.price.value);

  return (
    <div className="builder-container">
      <p>
        Current price:
        <b>${price.toFixed(2)}</b>
      </p>
      <AddContainers setOrderIngredients={setOrderIngredient} />
      <NavLink to="/login">
        <button className="signup" disabled={price.toFixed(1) == 3.0}>
          SIGN UP TO ORDER
        </button>
      </NavLink>
    </div>
  );
};
