import { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";

function Cart() {
  const cartItems = useContext(CartContext);
  return (
    <div className={styles["cart-items"]}>
      {Object.entries(cartItems.list).map(([id, value]) => {
        return (
          <CartItem
            key={id}
            id={id}
            name={value.name}
            price={value.price}
            amount={value.amount}
          />
        );
      })}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label>${cartItems.totalAmount}</label>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles["button"]}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
