import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSerialSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addToTheOrder(state, action) {
      //Checking if some tool selected more than once i will accepet just the last one
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });

      state.push(action.payload);
    },
    removeNotSeltected(state, action) {
      // remove from the state when  unselect checkbox
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });
    },
  },
});

export const OrderSerialActions = OrderSerialSlice.actions;
export default OrderSerialSlice.reducer;
