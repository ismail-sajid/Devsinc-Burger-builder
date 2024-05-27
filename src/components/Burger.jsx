import "./styles/Burger.css";
import "./styles/BurgerIngredient.css";
import React, { useMemo } from "react";

export const Burger = ({ orderIngredients, main_text = "No ingredients added" }) => {
  const ingredients = useMemo(
    () =>
      Object.entries(orderIngredients).flatMap(([ingredient, count]) => {
        return Array.from({ length: count }, () => ingredient);
      }),
    [orderIngredients]
  );

  return (
    <div className="burger">
      <div className="bread-top">
        <div className="burger-seed1"></div>
        <div className="burger-seed1-before"></div>
        <div className="burger-seed1-after"></div>
        <div className="burger-seed1-after1"></div>
      </div>

      {ingredients.length === 0 ? (
        <div>{main_text}</div>
      ) : (
        <>
          {ingredients.map((ingredient, i) => (
            <div key={ingredient + i} className={ingredient}></div>
          ))}
        </>
      )}
      <div className="bread-bottom"></div>
    </div>
  );
};
