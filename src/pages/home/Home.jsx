//
import React, { Fragment } from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import OrderPanel from "../../components/OrderPanel/OrderPanel";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header></Header>
      <OrderPanel></OrderPanel>
    </Fragment>
  );
}

export default Home;
