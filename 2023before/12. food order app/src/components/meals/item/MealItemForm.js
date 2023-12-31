import { useContext, useState } from "react";
import Input from "../../ui/Input";
import styles from "./MealItemForm.module.css";
import CartContext from "../../../contexts/CartContext";

function MealItemForm(props) {
  const cartContext = useContext(CartContext);
  const [count, setCount] = useState("1");

  const handleAddCart = (event) => {
    event.preventDefault();
    cartContext.addItem(props.id, props.name, props.price, count);
  };

  return (
    <form className={styles.form} onSubmit={handleAddCart}>
      <Input label="Amount" type="number" value={count} onChange={setCount} />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
