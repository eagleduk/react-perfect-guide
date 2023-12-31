import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../assets/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";

function HeaderCartButton(props) {
  const [isAddItem, setIsAddItem] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalNumbers = Object.values(cartCtx.list).reduce(
    (t, c) => (t += c.amount),
    0
  );
  const className = `${styles.button} ${isAddItem ? styles.bump : ""}`;

  useEffect(() => {
    setIsAddItem(true);
    const tt = setTimeout(() => {
      setIsAddItem(false);
    }, 300);
    return () => {
      clearTimeout(tt);
    };
  }, [totalNumbers]);

  return (
    <>
      <button className={className} onClick={props.clickButton}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <label>Your Cart</label>
        <div className={styles.badge}>{totalNumbers}</div>
      </button>
    </>
  );
}

export default HeaderCartButton;
