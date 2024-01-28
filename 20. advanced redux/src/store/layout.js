import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "layout",
  initialState: {
    cart: false,
    notification: null,
  },
  reducers: {
    toggle: (state) => {
      state.cart = !state.cart;
    },
    setNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default slice.reducer;

export const layoutActions = slice.actions;
