import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const initAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authencation",
  initialState: initAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
