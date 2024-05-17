import "./styles/Burger.css";
import "./styles/BurgerIngredient.css";

const Burger = ({
  ingredients,
  orderIngredients,
  main_text = "No ingredients added",
}) => {
  function addingItems() {
    const ingredientComponents = [];
    for (const [ingredient, count] of Object.entries(orderIngredients)) {
      for (let i = 0; i < count; i++) {
        ingredientComponents.push(
          <div key={ingredient + i} className={ingredient}></div>
        );
      }
    }
    return ingredientComponents;
  }
  const order = ["salad", "bacon", "cheese", "meat"];

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="BurgerSeed1"></div>
        <div className="BurgerSeed1_before"></div>
        <div className="BurgerSeed1_after"></div>
        <div className="BurgerSeed1_after1"></div>
      </div>

      {addingItems().length === 0 ? (
        <div>{main_text}</div>
      ) : (
        <>
          {order.map((ingredient) =>
            addingItems().filter((item) => item.props.className === ingredient)
          )}
        </>
      )}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
