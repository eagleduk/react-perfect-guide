import styles from "./CartItem.module.css";

function CartItem(props) {
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
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default CartItem;
