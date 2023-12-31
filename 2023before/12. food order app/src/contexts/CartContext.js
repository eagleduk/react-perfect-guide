import React, { useState } from "react";

const CartContext = React.createContext({
  list: {},
  totalAmount: 0,
  addItem: (id, price, amount) => {},
  removeItem: (id, amount) => {},
});

export default CartContext;

export function CartContextProvider(props) {
  const [list, setList] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const addItem = (id, name, price, amount) => {
    setTotalAmount((current) => (current += +price * +amount));
    setList((current) => {
      if (current[id] !== undefined) {
        current[id].amount += +amount;
      } else {
        current[id] = {
          price,
          name,
          amount: +amount,
        };
      }
      return current;
    });
  };

  const removeItem = (id, price, amount) => {
    setTotalAmount((current) => (current -= +price * +amount));
    setList((current) => {
      if (current[id] !== undefined) {
        current[id].amount =
          current[id].amount === 1 ? 0 : current[id].amount - +amount;
      }
      if (current[id].amount === 0) {
        delete current[id];
      }
      return current;
    });
  };

  return (
    <CartContext.Provider value={{ list, totalAmount, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
}
