import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import OrderSerialSlice from "./OrderSerialSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, OrderSerialSlice },
});
export default store;
