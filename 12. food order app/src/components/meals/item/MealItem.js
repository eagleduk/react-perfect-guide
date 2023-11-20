import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>

      <MealItemForm id={props.id} name={props.name} price={props.price} />
    </div>
  );
}

export default MealItem;
