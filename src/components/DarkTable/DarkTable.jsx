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

function DarkTable() {
  const [showModal, setShowModal] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [orderInfo, setorderInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);
  const checkOrder = useSelector((state) => state.CheckedOrder.order);
  const token = getToken();

  useEffect(() => {
    const fetchData = async () => {
      setDataLoading((state) => !state);
      try {
        const res = await httpRequest("GET", "/order/pending-orders", token);
        setDataFromApi(res.data.data);
      } catch (err) {
        alert(err.message);
      }
      setDataLoading((state) => !state);
    };
    fetchData();
  }, []);

  const showModalHadnler = () => setShowModal((state) => !state);

  const tableRowHandler = (order, ordersArray) => {
    const { id, username, date, time, orederStatus, orderType } = order;
    setorderInfo({ id, username, date, time, orederStatus, orderType });
    setModalJsx(ordersArray);
    setShowModal((state) => !state);
  };

  const updateOrderHandler = async () => {
    const userInfo = orderInfo;
    userInfo.orederStatus = "done";
    userInfo.order = checkOrder;
    console.log(userInfo);
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
              <div className={classes.button_box}>
                <button className={classes.done} onClick={updateOrderHandler}>
                  {loading ? "טוען..." : "בוצע"}
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
