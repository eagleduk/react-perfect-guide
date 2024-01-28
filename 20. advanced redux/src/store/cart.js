import { createSlice } from "@reduxjs/toolkit";
import { layoutActions } from "./layout";

const initialState = {
  items: {},
  fetchData: false,
  totalPrice: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items || {};
    },
    addCart: (state, action) => {
      const { id, price, quantity } = action.payload;

      if (state.items[id] === undefined) {
        state.items[id] = action.payload;
      } else {
        state.items[id].quantity += +quantity;
      }

      state.totalPrice += +price * +quantity;
      state.fetchData = true;
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
      state.fetchData = true;
    },
  },
});

export const getData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/redux/cart.json"
      );
      if (!response.ok) {
        throw new Error("Get Error");
      }

      const data = await response.json();
      dispatch(slice.actions.setCart(data));
    };

    await getData().catch((error) => console.log(error));
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      layoutActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Data...",
      })
    );

    const sendData = async (cart) => {
      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/redux/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalPrice: cart.totalPrice,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Send Error");
      }

      dispatch(
        layoutActions.setNotification({
          status: "success",
          title: "Success...",
          message: "Success Send Data...",
        })
      );
    };

    sendData(cart).catch((error) => {
      dispatch(
        layoutActions.setNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  };
};

export default slice.reducer;

export const cartActions = slice.actions;
