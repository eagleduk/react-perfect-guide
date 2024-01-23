import { useContext, useEffect, useState } from "react";
import MealItem from "./MealItem";
import { CartContext } from "../store/CartProvider";

export default function Meals() {
  const { dispatch } = useContext(CartContext);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        console.log("Error");
        return;
      }
      const data = await response.json();
      setMeals(data);
    }
    getMeals();
  }, []);
  const handleAddCartEvent = (meal) => {
    dispatch({ type: "ADD", payload: meal });
  };
  return (
    <ul id="meals">
      {meals.map((meal) => {
        return (
          <MealItem meal={meal} key={meal.id} onAddCart={handleAddCartEvent} />
        );
      })}
    </ul>
  );
}
