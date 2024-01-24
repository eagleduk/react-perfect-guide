import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/CartProvider";
import Modal from "./Modal";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Done from "./Done";

export default function Header() {
  const [modalType, setModalType] = useState(null);
  const {
    cart: { count },
  } = useContext(CartContext);

  const handleModalType = (type) => setModalType(type);

  return (
    <header id="main-header">
      <Modal isOpen={modalType !== null}>
        {modalType === "cart" && <Cart onModalType={handleModalType} />}
        {modalType === "checkout" && <Checkout onModalType={handleModalType} />}
        {modalType === "done" && <Done onModalType={handleModalType} />}
      </Modal>
      <div id="title">
        <img src={logo} />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button" onClick={() => handleModalType("cart")}>
        Cart({count})
      </button>
    </header>
  );
}
