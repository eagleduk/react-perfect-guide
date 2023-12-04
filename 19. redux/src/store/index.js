import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementByAmount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: { counter: counterSlice.reducer }
});

export const counterActions = counterSlice.actions;

export default store;
