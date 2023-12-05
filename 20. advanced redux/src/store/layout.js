import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "layout",
  initialState: {
    cart: false,
  },
  reducers: {
    toggle: (state) => {
      state.cart = !state.cart;
    },
  },
});

export default slice.reducer;

export const layoutActions = slice.actions;
