import { createContext, useState, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addCart: () => {},
  updateCart: () => {},
});

function reducer(state, action) {
  if (action.type === "ADD") {
    const id = action.id;
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === id);
      updatedItems.push({
        id: id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      items: updatedItems,
    };
  } else if (action.type === "UPDATE") {
    const productId = action.id;
    const amount = action.amount;
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }
  return state;
}

export default function CartProvider({ children }) {
  const [shoppingCart, dispatch] = useReducer(reducer, { items: [] });

  const provideValue = {
    cart: shoppingCart,
    addCart: (id) => dispatch({ type: "ADD", id: id }),
    updateCart: (id, amount) =>
      dispatch({ type: "UPDATE", id: id, amount: amount }),
  };

  return (
    <CartContext.Provider value={provideValue}>{children}</CartContext.Provider>
  );
}
