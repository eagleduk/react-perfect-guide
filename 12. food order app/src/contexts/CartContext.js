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
      if (list[id] !== undefined) {
        list[id].amount += +amount;
      } else {
        list[id] = {
          price,
          name,
          amount: +amount,
        };
      }
      return list;
    });
  };

  const removeItem = (id, price, amount) => {
    setTotalAmount((current) => (current -= +price * +amount));
    setList((current) => {
      if (list[id] !== undefined) {
        list[id].amount -= +amount;
      }
      return list;
    });
  };

  return (
    <CartContext.Provider value={{ list, totalAmount, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
}
