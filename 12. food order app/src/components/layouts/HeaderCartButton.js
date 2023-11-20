import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../assets/CartIcon";
import { useContext, useState } from "react";
import Cart from "../carts/Cart";
import Modal from "../ui/Modal";
import CartContext from "../../contexts/CartContext";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [display, setDisplay] = useState(false);
  const clickButton = () => {
    setDisplay(true);
  };
  return (
    <>
      {display && (
        <Modal onDisplay={setDisplay}>
          <Cart onDisplay={setDisplay} />
        </Modal>
      )}
      <div className={styles.button} onClick={clickButton}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <label>Your Cart</label>
        <button className={styles.badge}>
          {Object.values(cartCtx.list).reduce((t, c) => (t += c.amount), 0)}
        </button>
      </div>
    </>
  );
}

export default HeaderCartButton;
