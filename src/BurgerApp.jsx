import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Burger } from "./components/Burger";
import { Builder } from "./components/Builder";

export const BurgerApp = () => {
  const [ingredients, setIngredients] = useState([]);
  const [orderIngredients, setOrderIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  return (
    <div className="body">
      <Navbar />
      <Burger ingredients={ingredients} orderIngredients={orderIngredients} />
      <Builder setIngredient={setIngredients} setOrderIngredient={setOrderIngredients} />
    </div>
  );
};
