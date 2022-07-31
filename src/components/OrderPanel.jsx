import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Border from "./Border";
import Loading from "./Loading";
import OrderCard from "./OrderCard";
import OrderCardNoSerial from "./OrderCardNoSerial";
import classes from "./OrderPanel.module.css";

const OrderPanel = () => {
  const order = useSelector((state) => state.order);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handelSubmint = (e) => {
    e.preventDefault();
    if (order.length === 0) return;
    setIsLoading((state) => !state);
    console.log(order);
  };

  const handelSubmintNoSerial = (e) => {
    e.preventDefault();
    if (order.length === 0) return;
    setIsLoading2((state) => !state);
    console.log(order);
  };

  return (
    <div className={`container-fluid   ${classes.mainPanel} `}>
      <div className="container">
        <div className={classes.boxPanel}>
          <div>
            <span className={classes.gradienText}>הזמנת ציוד בקליק </span>
          </div>
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoji">
              📦 🚀
            </span>
          </div>
          {isLoading ? (
            <div className={classes.loadingBox}>
              <Loading />
            </div>
          ) : (
            <OrderCard onSubmitCard={handelSubmint} />
          )}
          <br />
          <Border />
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoji">
              ⚙️ 🛠
            </span>
          </div>
          {isLoading2 ? (
            <div className={classes.loadingBox}>
              <Loading />
            </div>
          ) : (
            <OrderCardNoSerial onSubmitCard={handelSubmintNoSerial} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
