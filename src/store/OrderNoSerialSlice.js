import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderNoSerialSlice = createSlice({
  name: "OrderNoSerial",
  initialState,
  reducers: {
    addToTheOrderNoSerial(state, action) {
      //Checking if some tool selected more than once i will accepet just the last one
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });

      state.push(action.payload);
    },
    // remove from the state when  unselect checkbox
    removeNotSeltectedOrderNoSerial(state, action) {
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });
    },
  },
});

export const OrderNoSerialActions = OrderNoSerialSlice.actions;
export default OrderNoSerialSlice.reducer;
