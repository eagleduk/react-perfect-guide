import { createContext, useReducer } from "react";

const defaultValue = {
  items: {},
  count: 0,
  price: 0,
};

export const CartContext = createContext(defaultValue);

function reducer(state, action) {
  console.log("action", action);
  if (action.type === "ADD") {
    const { id, name, price } = action.payload;

    if (state[id] !== undefined) {
      return {
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            count: state.items[id].count + 1,
          },
        },
        count: state.count + 1,
        price: state.price + price,
      };
    } else {
      return {
        items: {
          ...state.items,
          [id]: {
            name,
            price,
            count: 1,
          },
        },
        count: state.count + 1,
        price: state.price + price,
      };
    }
  }
  return state;
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, defaultValue);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
