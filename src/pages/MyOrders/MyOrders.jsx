import React from "react";
import { Fragment } from "react";
import Header from "../../components/Header/Header";
import MyOrdersPanel from "../../components/MyOrdersPanel/MyOrdersPanel";

function MyOrders() {
  return (
    <Fragment>
      <Header></Header>
      <MyOrdersPanel></MyOrdersPanel>
    </Fragment>
  );
}

export default MyOrders;
