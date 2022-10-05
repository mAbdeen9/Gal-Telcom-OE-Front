import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import AdminGear from "../AdminGear/AdminGear";
import Loading from "../Loading/Loading";
import ModalTable from "../Modal/ModalTable";
import classes from "./DarkTable.module.css";
import { toast } from "react-toastify";
import { useRef } from "react";

function DarkTable() {
  const [showModal, setShowModal] = useState(false);
  const [showTextAria, setShowTextAria] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [orderInfo, setorderInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);
  const [sendReq, setSendReq] = useState(false);
  const checkOrder = useSelector((state) => state.CheckedOrder.order);
  const token = getToken();
  const textRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setDataLoading((state) => !state);
      try {
        const res = await httpRequest("GET", "/order/pending-orders", token);
        setDataFromApi(res.data.data);
      } catch (err) {
        toast(err.message);
      }
      setDataLoading((state) => !state);
    };
    fetchData();
    // eslint-disable-next-line
  }, [sendReq]);

  const showModalHadnler = () => setShowModal((state) => !state);
  const showTextArea = () => setShowTextAria((state) => !state);
  const tableRowHandler = (order, ordersArray) => {
    const { id, username, date, time, orederStatus, orderType, _id } = order;
    setorderInfo({ id, username, date, time, orederStatus, orderType, _id });
    setModalJsx(ordersArray);
    setShowModal((state) => !state);
  };

  const updateOrderHandler = async () => {
    const userInfo = { ...orderInfo };
    userInfo.orederStatus = "done";
    userInfo.order = checkOrder;

    setLoading((state) => !state);
    if (userInfo.orderType === "Serial") {
      const textInput = {
        serials: textRef.current?.value,
        order: userInfo.order.filter((o) => o.value !== "--"),
        id: userInfo.id,
        date: userInfo.date,
        user: userInfo.username,
      };
      console.log(textInput);
      try {
        await httpRequest("POST", "/order/checked-serial", token, userInfo);
      } catch (err) {
        toast(err.message);
      }
      setSendReq((state) => !state);
    }

    if (userInfo.orderType === "noSerial") {
      try {
        await httpRequest("POST", "/order/checked-no-serial", token, userInfo);
      } catch (err) {
        toast(err.message);
      }
      setSendReq((state) => !state);
    }
    setLoading((state) => !state);
    setShowModal((state) => !state);
  };

  return (
    <Fragment>
      {dataLoading ? (
        <div className={classes.Loading}>
          <Loading />
        </div>
      ) : (
        <Table
          striped
          bordered
          hover
          variant="dark"
          className={classes.table_main}
        >
          {showModal && (
            <ModalTable>
              <h5>הזמנה עבור : {orderInfo.username} </h5>
              <h5>מחסן טכנאי : {orderInfo.id}</h5>
              <h5>תאריך : {orderInfo.date}</h5>
              {modalJsx.map((data, index) => {
                return (
                  <AdminGear
                    key={index}
                    type={data.type}
                    name={data.name}
                    value={data.value}
                  />
                );
              })}
              {showTextAria && (
                <div className={classes.text__area}>
                  <textarea ref={textRef} cols="50" rows="10"></textarea>
                </div>
              )}
              <div className={classes.button_box}>
                <button className={classes.done} onClick={updateOrderHandler}>
                  {loading ? "טוען..." : "בוצע"}
                </button>
                <button className={classes.textBtn} onClick={showTextArea}>
                  סרוק
                </button>
                <button className={classes.close} onClick={showModalHadnler}>
                  סגור
                </button>
              </div>
            </ModalTable>
          )}
          <thead>
            <tr>
              <th>#</th>
              <th>שם הטכנאי</th>
              <th>מחסן טכנאי</th>
              <th>פרטי הזמנה</th>
            </tr>
          </thead>
          <tbody>
            {dataFromApi.map((order, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    tableRowHandler(order, order.order);
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{order.username}</td>
                  <td>{order.id}</td>
                  <td>{order.orderType}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
}

export default DarkTable;
