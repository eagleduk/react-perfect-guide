import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../assets/CartIcon";
import { useState } from "react";
import Cart from "../carts/Cart";
import Modal from "../ui/Modal";

function HeaderCartButton(props) {
  const [display, setDisplay] = useState(false);
  const clickButton = () => {
    setDisplay(true);
  };
  return (
    <>
      {display && (
        <Modal>
          <Cart />
        </Modal>
      )}
      <div className={styles.button} onClick={clickButton}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <label>Your Cart</label>
        <button className={styles.badge}>0</button>
      </div>
    </>
  );
}

export default HeaderCartButton;
