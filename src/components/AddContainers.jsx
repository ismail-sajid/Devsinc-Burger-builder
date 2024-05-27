import React, { useState, useCallback } from "react";
import "./styles/Builder.css";
import { addIngredient, subIngredient } from "../redux/counterSlice";
import { useDispatch } from "react-redux";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

export const AddContainers = ({ setOrderIngredients }) => {
  const [ingredientAdded, setIngredientAdded] = useState(false);
  const dispatch = useDispatch();

  const handleClickMore = useCallback(
    (ingredientName) => {
      dispatch(addIngredient(ingredientName));
      setIngredientAdded({ ...ingredientAdded, [ingredientName]: true });
      setOrderIngredients((prevValue) => ({
        ...prevValue,
        [ingredientName]: prevValue[ingredientName] + 1,
      }));
    },
    [dispatch, ingredientAdded, setOrderIngredients]
  );

  const handleLessClick = useCallback(
    (ingredientName) => {
      dispatch(subIngredient(ingredientName));
      setOrderIngredients((prevValue) => {
        const updatedIngredients = { ...prevValue };
        updatedIngredients[ingredientName] = Math.max(0, updatedIngredients[ingredientName] - 1);
        if (updatedIngredients[ingredientName] === 0) {
          setIngredientAdded({ ...ingredientAdded, [ingredientName]: false });
        }
        return updatedIngredients;
      });
    },
    [dispatch, ingredientAdded, setOrderIngredients]
  );

  return (
    <div className="ingredient-container">
      {controls.map((control) => (
        <div key={control.type} className="ingredient-item">
          <div className="ingredient-text">{control.label}</div>
          <button
            onClick={() => handleLessClick(control.type)}
            className="button-less"
            disabled={!ingredientAdded[control.type]}
          >
            Less
          </button>
          <button onClick={() => handleClickMore(control.type)} className="button-more">
            More
          </button>
        </div>
      ))}
    </div>
  );
};
