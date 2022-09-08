import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import classes from "./MyOrdersPanel.module.css";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import Loading from "../Loading/Loading";

function MyOrdersPanel() {
  const [showMoadl, setShowMoadl] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [dateOfOrder, setDateOfOrder] = useState("");
  const [data, setData] = useState([]);
  const [NoSerialData, setNoSerialData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [isLoading2, setIsLoading2] = useState(false);
  const [error2, setError2] = useState({ status: false, message: "" });
  const token = getToken();

  useEffect(() => {
    const fetchSerialData = async () => {
      try {
        setIsLoading((state) => !state);
        const res = await httpRequest("GET", "/order/my-serials-orders", token);
        setData(res.data.data);
      } catch (err) {
        setError(() => ({ status: true, message: err.message }));
      }
      setIsLoading((state) => !state);
    };

    const fetchNoSerialData = async () => {
      try {
        setIsLoading2((state) => !state);
        const res = await httpRequest(
          "GET",
          "/order/my-no-serials-orders",
          token
        );
        setNoSerialData(res.data.data);
      } catch (err) {
        setError2(() => ({ status: true, message: err.message }));
      }
      setIsLoading2((state) => !state);
    };

    fetchSerialData();
    fetchNoSerialData();
    // eslint-disable-next-line
  }, []);

  const modalHandler = (data, date) => {
    setShowMoadl((state) => !state);
    setDateOfOrder(date);
    setModalJsx(data);
  };

  const handleClickBackDrop = () => setShowMoadl((state) => !state);

  return (
    <Container>
      {showMoadl && (
        <Modal handleClick={handleClickBackDrop}>
          <div>תאריך : {dateOfOrder}</div>
          {modalJsx.map((list, index) => {
            return (
              <div className={classes.modal_style} key={index}>
                <div>- {list.name} </div>
                <div>
                  &nbsp;
                  <span role="img" aria-label="arrow img">
                    ⬅️
                  </span>
                  &nbsp;
                </div>
                <div> ( {list.value} )</div>
              </div>
            );
          })}
        </Modal>
      )}
      <div className={classes.box}>
        <>
          ההזמנות ממוינות לפי תאריך ההזמנה , החל מההזמנה האחרונה , (סדר יורד)
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoj2i">
              💥 🗓
            </span>
          </div>
        </>
        <span className={classes.t1}>הזמנות סריאלי</span>
        <div className={classes.serial_box}>
          {isLoading ? (
            <Loading />
          ) : (
            !error.status &&
            data.map((order, index) => {
              return (
                <div key={index} className={classes.line}>
                  <div>תאריך : {order.date}</div>
                  <div>
                    <button
                      onClick={() => {
                        modalHandler(order.order, order.date);
                      }}
                      className={
                        order.orederStatus === "pending"
                          ? classes.pending
                          : classes.btnStyle
                      }
                    >
                      פרטי הזמנה
                    </button>
                  </div>
                </div>
              );
            })
          )}
          {error.status ? error.message : ""}
        </div>
        <Border />
        <span className={classes.t1}>הזמנות לא סריאלי</span>
        <div className={classes.serial_box}>
          {isLoading2 ? (
            <Loading />
          ) : (
            NoSerialData.map((order, index) => {
              return (
                <div key={index} className={classes.line}>
                  <div>תאריך : {order.date}</div>
                  <div>
                    <button
                      onClick={() => {
                        modalHandler(order.order, order.date);
                      }}
                      className={
                        order.orederStatus === "pending"
                          ? classes.pending
                          : classes.btnStyle
                      }
                    >
                      פרטי הזמנה
                    </button>
                  </div>
                </div>
              );
            })
          )}
          {error2.status ? error2.message : ""}
        </div>
        <br />
      </div>
    </Container>
  );
}

export default MyOrdersPanel;
