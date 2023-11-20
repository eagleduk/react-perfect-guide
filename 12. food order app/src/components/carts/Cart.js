import { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../contexts/CartContext";

function Cart(props) {
  const cartItems = useContext(CartContext);
  const handleOrderClick = () => {
    console.log("Order....");
  };
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
            onAddItem={cartItems.addItem}
            onRemoveItem={cartItems.removeItem}
          />
        );
      })}
      <div className={styles.total}>
        <label>Total Amount</label>
        <label>${cartItems.totalAmount.toFixed(2)}</label>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={() => props.onDisplay(false)}
        >
          Close
        </button>
        <button className={styles["button"]} onClick={handleOrderClick}>
          Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
