import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderNoSerialActions } from "../../store/OrderNoSerialSlice";
import { OrderSerialActions } from "../../store/OrderSerialSlice";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import MessageCard from "../MessageCard/MessageCard";
import OrderCard from "../OrderCard/OrderCard";
import OrderCardNoSerial from "../OrderCardNoSerial/OrderCardNoSerial";
import classes from "./OrderPanel.module.css";
import axios from "axios";
import { apiUrl } from "../../config.json";

const OrderPanel = () => {
  //Just for Testing you should remove this code ⚠️⚠️⚠️⚠️⚠️⚠️
  const OrderSerialSliceFull = useSelector((state) => state.OrderSerialSlice);
  const OrderNoSerialSliceFull = useSelector(
    (state) => state.OrderNoSerialSlice
  );

  //
  const OrderSerialSlice = useSelector((state) => state.OrderSerialSlice.order);
  const OrderNoSerialSlice = useSelector(
    (state) => state.OrderNoSerialSlice.order
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [response, setResponse] = useState(null);
  const [messageFromServer, setMessageFromServer] = useState("");
  const [response2, setResponse2] = useState(null);
  const [messageFromServer2, setMessageFromServer2] = useState("");
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("meta-data")).token;

  useEffect(() => {
    dispatch(OrderSerialActions.reset());
    dispatch(OrderNoSerialActions.reset());
  }, []);

  const handelSubmintSerial = async (e) => {
    e.preventDefault();
    if (OrderSerialSlice.length === 0) return;
    try {
      setIsLoading((state) => !state);
      const res = await axios({
        method: "POST",
        url: `${apiUrl}/order/new-serial-order`,
        headers: {
          authorization: token,
        },
        data: OrderSerialSliceFull,
      });
      setResponse(true);
      setMessageFromServer(res.data.message);
    } catch (err) {
      setResponse(true);
      setMessageFromServer(err.response.data.message);
    }
    setIsLoading((state) => !state);
  };

  const handelSubmintNoSerial = async (e) => {
    e.preventDefault();
    if (OrderNoSerialSlice.length === 0) return;

    try {
      setIsLoading2((state) => !state);
      const res = await axios({
        method: "POST",
        url: `${apiUrl}/order/new-noSerial-order`,
        headers: {
          authorization: token,
        },
        data: OrderNoSerialSliceFull,
      });
      setResponse2(true);
      setMessageFromServer2(res.data.message);
    } catch (err) {
      setResponse2(true);
      setMessageFromServer2(err.response.data.message);
    }
    setIsLoading2((state) => !state);
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
        {!response2 ? (
          isLoading2 ? (
            <div className={classes.loadingBox}>
              <Loading />
            </div>
          ) : (
            <OrderCardNoSerial onSubmitCard={handelSubmintNoSerial} />
          )
        ) : (
          <MessageCard message={messageFromServer2} />
        )}
      </div>
    </Container>
  );
};

export default OrderPanel;
