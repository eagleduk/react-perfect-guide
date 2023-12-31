import Card from "../ui/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./item/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => {
          return (
            <MealItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
