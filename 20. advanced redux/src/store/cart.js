import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalPrice: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, price, quantity } = action.payload;

      if (state.items[id] === undefined) {
        state.items[id] = action.payload;
      } else {
        state.items[id].quantity += +quantity;
      }

      state.totalPrice += +price * +quantity;
    },
    removeCart: (state, action) => {
      const { id, quantity } = action.payload;
      const price = state.items[id].price;
      if (state.items[id].quantity === quantity) {
        delete state.items[id];
      } else {
        state.items[id].quantity -= quantity;
      }
      state.totalPrice -= +price * +quantity;
    },
  },
});

export default slice.reducer;

export const cartActions = slice.actions;
