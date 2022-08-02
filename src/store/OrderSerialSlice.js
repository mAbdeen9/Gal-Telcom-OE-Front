import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSerialSlice = createSlice({
  name: "OrderSerial",
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
    // remove from the state when  unselect checkbox
    removeNotSeltected(state, action) {
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
