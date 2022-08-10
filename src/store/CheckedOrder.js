import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const CheckedOrder = createSlice({
  name: "CheckedOrder",
  initialState,
  reducers: {
    addToTheFinalOrder(state, action) {
      state.order.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.order.splice(i, 1);
        }
      });

      state.order.push(action.payload);
    },

    reset: () => initialState,
  },
});

export const CheckedOrderActions = CheckedOrder.actions;
export default CheckedOrder.reducer;
