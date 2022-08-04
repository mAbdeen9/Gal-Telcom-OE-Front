import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const timeAndDate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " / " + time;
  return dateTime;
};

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

      state.push({ ...action.payload, dateTime: timeAndDate() });
    },
    // remove from the cart when  unselect checkbox
    removeNotSeltected(state, action) {
      state.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.splice(i, 1);
        }
      });
    },
    //rest cart when mounting page
    reset: () => initialState,
  },
});

export const OrderSerialActions = OrderSerialSlice.actions;
export default OrderSerialSlice.reducer;
