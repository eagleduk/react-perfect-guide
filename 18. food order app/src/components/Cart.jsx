import { useContext } from "react";
import { CartContext } from "../store/CartProvider";

export default function Cart({ onClose }) {
  const {
    cart: { items, price },
    dispatch,
  } = useContext(CartContext);
  const handleAddCartEvent = (meal) => {
    dispatch({ type: "ADD", payload: meal });
  };

  const handleRemoveCartEvent = (meal) => {
    dispatch({ type: "REMOVE", payload: meal });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {Object.entries(items).map(([key, value]) => {
          return (
            <li key={key} className="cart-item">
              <p>
                {value.name} - {value.count} X ${value.price}
              </p>
              <p className="cart-item-actions">
                <button
                  type="button"
                  onClick={() => handleRemoveCartEvent(value)}
                >
                  -
                </button>
                <span>{value.id}</span>
                <button type="button" onClick={() => handleAddCartEvent(value)}>
                  +
                </button>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="cart-total">${price.toFixed(2)}</p>
      <div className="modal-actions">
        <button className="text-button" type="button" onClick={onClose}>
          Close
        </button>
        <button type="button" className="button">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
