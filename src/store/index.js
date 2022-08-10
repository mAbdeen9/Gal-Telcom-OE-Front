import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CheckedOrder from "./CheckedOrder";
import OrderNoSerialSlice from "./OrderNoSerialSlice";
import OrderSerialSlice from "./OrderSerialSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    OrderSerialSlice,
    OrderNoSerialSlice,
    CheckedOrder,
  },
});
export default store;
