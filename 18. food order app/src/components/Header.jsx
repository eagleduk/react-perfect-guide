import { useContext } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/CartProvider";

export default function Header() {
  const { cart, dispatch } = useContext(CartContext);
  const { count } = cart;
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button">Cart({count})</button>
    </header>
  );
}
