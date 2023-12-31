import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.entries(cartItem).map(([key, value]) => {
          return (
            <CartItem
              key={key}
              item={{
                title: value.title,
                quantity: value.quantity,
                price: value.price,
                total: +value.price * +value.quantity,
                id: key,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
