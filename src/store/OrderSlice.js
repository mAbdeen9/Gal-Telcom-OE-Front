import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addToTheOrder(state, action) {
      state.action.payload.name = action.payload.value;
    },
  },
});

export const OrdeActions = OrderSlice.actions;
export default OrderSlice.reducer;
