import { createSlice } from "@reduxjs/toolkit";

const todayDate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return date;
};

const time = () => {
  const today = new Date();
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
};

const initialState = {
  id: "",
  username: "",
  date: "",
  time: "",
  orderType: "Serial",
  orederStatus: "pending",
  order: [],
};

const OrderSerialSlice = createSlice({
  name: "OrderSerial",
  initialState,
  reducers: {
    addToTheOrder(state, action) {
      //Checking if some tool selected more than once i will accepet just the last one
      state.order.forEach((order, i) => {
        if (order.name === action.payload.orderDetails.name) {
          state.order.splice(i, 1);
        }
      });
      state.id = action.payload.userDetails.id;
      state.username = action.payload.userDetails.name;
      state.date = todayDate();
      state.time = time();
      state.order.push({ ...action.payload.orderDetails });
    },
    // remove from the cart when  unselect checkbox
    removeNotSeltected(state, action) {
      state.order.forEach((order, i) => {
        if (order.name === action.payload.name) {
          state.order.splice(i, 1);
        }
      });
    },
    //rest cart when mounting page
    reset: () => initialState,
  },
});

export const OrderSerialActions = OrderSerialSlice.actions;
export default OrderSerialSlice.reducer;
