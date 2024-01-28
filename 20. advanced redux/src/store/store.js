import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import layoutReducer from "./layout";

export default configureStore({
  reducer: {
    cart: cartReducer,
    layout: layoutReducer,
  },
});
