import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/CartProvider";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart: { count },
  } = useContext(CartContext);

  const handleModalClose = () => setIsOpen(false);

  return (
    <header id="main-header">
      <Modal isOpen={isOpen}>
        {isOpen && <Cart onClose={handleModalClose} />}
      </Modal>
      <div id="title">
        <img src={logo} />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button" onClick={() => setIsOpen(true)}>
        Cart({count})
      </button>
    </header>
  );
}
