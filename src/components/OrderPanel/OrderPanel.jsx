import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import MessageCard from "../MessageCard/MessageCard";
import OrderCard from "../OrderCard/OrderCard";
import OrderCardNoSerial from "../OrderCardNoSerial/OrderCardNoSerial";

import classes from "./OrderPanel.module.css";

const OrderPanel = () => {
  const OrderSerialSlice = useSelector((state) => state.OrderSerialSlice);
  const OrderNoSerialSlice = useSelector((state) => state.OrderNoSerialSlice);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [response, setResponse] = useState(null);
  const [messageFromServer, setMessageFromServer] = useState("");

  const handelSubmintSerial = (e) => {
    e.preventDefault();
    if (OrderSerialSlice.length === 0) return;
    setIsLoading((state) => !state);
    console.log(OrderSerialSlice);
    setTimeout(() => {
      setResponse(true);
      setMessageFromServer("קיבלנו את בקשתך בהצלחה 👍");
      setIsLoading((state) => !state);
    }, 3000);
  };

  const handelSubmintNoSerial = (e) => {
    e.preventDefault();
    if (OrderNoSerialSlice.length === 0) return;
    setIsLoading2((state) => !state);
    console.log(OrderNoSerialSlice);
  };

  return (
    <Container>
      <div className={classes.boxPanel}>
        <div>
          <span className={classes.gradienText}>הזמנת ציוד בקליק </span>
        </div>
        <div className={classes.sizeRocket}>
          <span role="img" aria-label="emoji">
            📦 🚀
          </span>
        </div>
        {!response ? (
          isLoading ? (
            <div className={classes.loadingBox}>
              <Loading />
            </div>
          ) : (
            <OrderCard onSubmitCard={handelSubmintSerial} />
          )
        ) : (
          <MessageCard message={messageFromServer} />
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
    </Container>
  );
};

export default OrderPanel;
