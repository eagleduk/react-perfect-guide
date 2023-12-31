import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const [submited, setSubmited] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const handleOrderButtonClick = () => {
    setIsCheckOut(true);
  };

  const handleOrderSubmit = async (userData) => {
    setSubmiting(true);
    setSubmited(false);

    await fetch(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/food/order.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: userData,
          cart: cartCtx.items,
        }),
      }
    );
    setIsCheckOut(false);
    setSubmiting(false);
    setSubmited(true);

    cartCtx.clearItem();
  };

  const orderContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout onCancel={props.onClose} onOrder={handleOrderSubmit} />
      )}
      {!isCheckOut && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={handleOrderButtonClick}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );
  const submitingContent = <p>Sending order data...</p>;
  const submitedContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submiting && !submited && orderContent}
      {submiting && submitingContent}
      {!submiting && submited && submitedContent}
    </Modal>
  );
};

export default Cart;
