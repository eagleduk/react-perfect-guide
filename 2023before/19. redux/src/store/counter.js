import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
