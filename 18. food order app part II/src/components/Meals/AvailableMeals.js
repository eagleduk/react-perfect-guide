import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/food/menu.json"
      );

      if (!response.ok) {
        throw new Error("Response Error!");
      }
      const data = await response.json();
      if (data != null) {
        const mm = [];
        for (const key in data) {
          mm.push({
            ...data[key],
            id: key,
          });
        }
        setMenus(mm);
      }
    })();
  }, []);

  const mealsList = menus.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
