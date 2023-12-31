import styles from "./CartItem.module.css";

function CartItem(props) {
  const handleAddClick = () => {
    props.onAddItem(props.id, props.name, props.price, "1");
  };

  const handleRemoveClick = () => {
    props.onRemoveItem(props.id, props.price, "1");
  };
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>${props.price}</div>
          <div className={styles.amount}> x {props.amount}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleRemoveClick}>-</button>
        <button onClick={handleAddClick}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
