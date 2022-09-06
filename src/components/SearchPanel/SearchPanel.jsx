import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import classes from "./SearchPanel.module.css";

function SearchPanel() {
  const serialRef = useRef();
  const noSerialRef = useRef();
  const token = getToken();
  const [showMoadl, setShowMoadl] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [userDetails, setUserDetails] = useState("");
  const [data, setData] = useState([]);
  const [NoSerialData, setNoSerialData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isLoading2, setIsloading2] = useState(false);

  const modalHandler = (data, date, id, username) => {
    setShowMoadl((state) => !state);
    setUserDetails({ date, id, username });
    setModalJsx(data);
  };

  const handleClickBackDrop = () => setShowMoadl((state) => !state);

  const serialHandler = async () => {
    const id = serialRef.current.value;
    if (!id) return;
    try {
      setIsloading((state) => !state);
      const res = await httpRequest(
        "GET",
        `/order/get-user-serial-orders/${id}`,
        token
      );
      const data = res.data.data.reverse();
      setData(data);
    } catch (err) {
      toast(err.response.data.message);
      setData([]);
    }
    setIsloading((state) => !state);
  };

  const noSerialHandler = async () => {
    const id = noSerialRef.current.value;
    if (!id) return;
    try {
      setIsloading2((state) => !state);
      const res = await httpRequest(
        "GET",
        `/order/get-user-no-serial-orders/${id}`,
        token
      );
      const data = res.data.data.reverse();
      setNoSerialData(data);
    } catch (err) {
      toast(err.response.data.message);
      setNoSerialData([]);
    }
    setIsloading2((state) => !state);
  };

  return (
    <Container>
      {showMoadl && (
        <Modal handleClick={handleClickBackDrop}>
          <h5>הזמנה עבור : {userDetails.username} </h5>
          <h5>מחסן טכנאי : {userDetails.id}</h5>
          <h5>תאריך : {userDetails.date}</h5>
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
        <span className={classes.t1}>לחפש הזמנות סריאלי </span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={serialRef}
          />{" "}
          &nbsp;
          <button onClick={serialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={classes.serial_box}>
          {isLoading ? (
            <Loading />
          ) : (
            data.map((order, index) => {
              return (
                <div key={index} className={classes.line}>
                  <div>תאריך : {order.date}</div>
                  <div>
                    <button
                      onClick={() => {
                        modalHandler(
                          order.order,
                          order.date,
                          order.id,
                          order.username
                        );
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
        </div>
        <Border />
        <span className={classes.t1}>לחפש הזמנות לא סריאלי</span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={noSerialRef}
          />
          &nbsp;
          <button onClick={noSerialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
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
                        modalHandler(
                          order.order,
                          order.date,
                          order.id,
                          order.username
                        );
                      }}
                      className={classes.btnStyle}
                    >
                      פרטי הזמנה
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <br />
      </div>
    </Container>
  );
}

export default SearchPanel;
