import React, { useState } from "react";
import "./styles/Builder.css";
import {
  addSalad,
  addBacon,
  addCheese,
  addMeat,
  subSalad,
  subBacon,
  subCheese,
  subMeat,
} from "../redux/counterSlice";
import { useDispatch } from "react-redux";

const Add_containers = ({
  setOrderIngredients,
  onIngredientAdded,
  onIngredientRemoved,
}) => {
  const [ingredientAdded, setIngredientAdded] = useState(false);
  const dispatch = useDispatch();
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

  function handleClickMore(ingredientName) {
    if (ingredientName === "salad") {
      dispatch(addSalad());
    } else if (ingredientName === "bacon") {
      dispatch(addBacon());
    } else if (ingredientName === "cheese") {
      dispatch(addCheese());
    } else if (ingredientName === "meat") {
      dispatch(addMeat());
    }

    setIngredientAdded({ ...ingredientAdded, [ingredientName]: true });
    setOrderIngredients((prevValue) => ({
      ...prevValue,
      [ingredientName]: prevValue[ingredientName] + 1,
    }));

    onIngredientAdded(ingredientName);
  }

  function handleLessClick(ingredientName) {
    if (ingredientName === "salad") {
      dispatch(subSalad());
    } else if (ingredientName === "bacon") {
      dispatch(subBacon());
    } else if (ingredientName === "cheese") {
      dispatch(subCheese());
    } else if (ingredientName === "meat") {
      dispatch(subMeat());
    }
    setOrderIngredients((prevValue) => {
      const updatedIngredients = { ...prevValue };
      updatedIngredients[ingredientName] = Math.max(
        0,
        updatedIngredients[ingredientName] - 1
      );
      if (updatedIngredients[ingredientName] === 0) {
        setIngredientAdded({ ...ingredientAdded, [ingredientName]: false });
      }

      return updatedIngredients;
    });

    onIngredientRemoved(ingredientName);
  }
  return (
    <div className="Ingredient_container">
      {controls.map((control) => (
        <div key={control.type} className="Ingredient_item">
          <div className="Ingredient_text">{control.label}</div>
          <button
            onClick={() => handleLessClick(control.type)}
            className="Button_less"
            disabled={!ingredientAdded[control.type]}
          >
            Less
          </button>
          <button
            onClick={() => handleClickMore(control.type)}
            className="Button_more"
          >
            More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Add_containers;
