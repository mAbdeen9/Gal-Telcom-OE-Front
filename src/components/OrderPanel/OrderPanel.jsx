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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrderSerialActions.reset());
    dispatch(OrderNoSerialActions.reset());
  }, []);

  const handelSubmintSerial = async (e) => {
    e.preventDefault();
    if (OrderSerialSlice.length === 0) return;
    try {
      const token = JSON.parse(localStorage.getItem("meta-data")).token;
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

  const handelSubmintNoSerial = (e) => {
    e.preventDefault();
    if (OrderNoSerialSlice.length === 0) return;
    setIsLoading2((state) => !state);
    console.log(OrderNoSerialSliceFull);
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
