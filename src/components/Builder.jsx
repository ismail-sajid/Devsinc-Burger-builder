import React, { useState, useEffect } from "react";
import Add_containers from "./Add_containers";
import "./styles/Builder.css";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Builder = ({ setIngredients, setOrderIngredients }) => {
  const price = useSelector((state) => state.price.value);
  const [totalIngredientCount, setTotalIngredientCount] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(3.0);
  const [priceState, setPriceState] = useState(true);

  function handleIngredientAdded(ingredientType) {
    setTotalIngredientCount((prevCount) => prevCount + 1);

    let priceIncrement = 0;
    switch (ingredientType) {
      case "salad":
        priceIncrement = 0.5;
        break;
      case "bacon":
        priceIncrement = 0.7;
        break;
      case "cheese":
        priceIncrement = 0.4;
        break;
      case "meat":
        priceIncrement = 1.3;
        break;
      default:
        priceIncrement = 0;
    }

    setCurrentPrice((prevPrice) => prevPrice + priceIncrement);
  }

  function handleIngredientRemoved(ingredientType) {
    setTotalIngredientCount((prevCount) => Math.max(0, prevCount - 1));
    let priceDecrement = 0;
    switch (ingredientType) {
      case "salad":
        priceDecrement = 0.5;
        break;
      case "bacon":
        priceDecrement = 0.7;
        break;
      case "cheese":
        priceDecrement = 0.4;
        break;
      case "meat":
        priceDecrement = 1.3;
        break;
      default:
        priceDecrement = 0;
    }
    setCurrentPrice((prevPrice) => prevPrice - priceDecrement);
  }
  return (
    <div className="Builder_container">
      <p>
        Current price: <b>${price.toFixed(2)}</b>{" "}
      </p>
      <Add_containers
        setIngredients={setIngredients}
        setOrderIngredients={setOrderIngredients}
        onIngredientAdded={handleIngredientAdded}
        onIngredientRemoved={handleIngredientRemoved}
      />
      <NavLink to="/login">
        <button className="Signup" disabled={totalIngredientCount === 0}>
          SIGN UP TO ORDER
        </button>
      </NavLink>
    </div>
  );
};

export default Builder;
