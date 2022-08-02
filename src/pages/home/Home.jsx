//
import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import OrderPanel from "../../components/OrderPanel/OrderPanel";

function Home() {
  return (
    <Fragment>
      <Header></Header>
      <OrderPanel></OrderPanel>
    </Fragment>
  );
}

export default Home;
