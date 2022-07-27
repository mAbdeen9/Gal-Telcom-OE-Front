import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addToTheOrder(state, action) {
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });
      if (action.payload.value == null) return;
      state.push(action.payload);
    },
  },
});

export const OrderActions = OrderSlice.actions;
export default OrderSlice.reducer;
