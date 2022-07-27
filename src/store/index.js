import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import OrderSlice from "./OrderSlice";
const store = configureStore({
  reducer: { auth: AuthSlice, order: OrderSlice },
});
export default store;
