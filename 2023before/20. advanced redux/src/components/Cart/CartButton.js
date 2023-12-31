import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { layoutActions } from "../../store/layout";

const CartButton = (props) => {
  const dispath = useDispatch();

  const toggleCartButtonEvent = () => {
    dispath(layoutActions.toggle());
  };

  const cartAmount = useSelector((state) =>
    Object.values(state.cart.items).reduce((t, c) => (t += c.quantity), 0)
  );
  return (
    <button className={classes.button} onClick={toggleCartButtonEvent}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
