import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminGear from "../AdminGear/AdminGear";
import ModalTable from "../Modal/ModalTable";
import classes from "./DarkTable.module.css";

const dataFromApi = [
  {
    id: "22",
    username: "מוחמד",
    dateTime: "2022-8-10 / 0:44:28",
    orderType: "Serial",
    orederStatus: "pending",
    order: [
      {
        name: "נתב דגם AC VV5823",
        value: "10",
        type: "serial",
      },
      {
        name: "נתב סיבים דגם AIO",
        value: "15",
        type: "serial",
      },
      {
        name: "נתב דגם B35",
        value: "5",
        type: "serial",
      },
    ],
  },
  {
    id: "44",
    username: "מוחמד",
    dateTime: "2022-8-120 / 0:44:28",
    orderType: "Serial",
    orederStatus: "pending",
    order: [
      {
        name: "נתב דגם AC 321",
        value: "12",
        type: "serial",
      },
      {
        name: "3 סיבים דגם AIO",
        value: "3",
        type: "serial",
      },
      {
        name: "נתב דגם B35",
        value: "5",
        type: "serial",
      },
    ],
  },
  {
    id: "55",
    username: "מוחמד",
    dateTime: "2022-8-10 / 0:44:28",
    orderType: "Serial",
    orederStatus: "pending",
    order: [
      {
        name: "נתב דגם AC asdz",
        value: "60",
        type: "serial",
      },
      {
        name: "נתב סיבים דגם gdf",
        value: "33",
        type: "serial",
      },
      {
        name: "נתב דגם B353",
        value: "51",
        type: "noser",
      },
    ],
  },
];

function DarkTable() {
  const [showModal, setShowModal] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [orderId, setOrderId] = useState({});
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const checkOrder = useSelector((state) => state.CheckedOrder.order);

  const showModalHadnler = () => setShowModal((state) => !state);

  const tableRowHandler = (order, orders) => {
    const { id, username, dateTime, orederStatus, orderType } = order;
    setOrderId({ id, username, dateTime, orederStatus, orderType });
    setModalJsx(orders);
    setShowModal((state) => !state);
  };

  const updateOrderHandler = () => {
    const userInfo = orderId;
    userInfo.orederStatus = "done";
    userInfo.order = checkOrder;
    console.log(userInfo);
    setShowModal((state) => !state);
  };

  return (
    <Table striped bordered hover variant="dark" className={classes.table_main}>
      {showModal && (
        <ModalTable>
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
        {dataFromApi.map((orders, index) => {
          return (
            <tr
              key={index}
              onClick={() => {
                tableRowHandler(orders, orders.order);
              }}
            >
              <td>{index + 1}</td>
              <td>{orders.username}</td>
              <td>{orders.id}</td>
              <td>{orders.orderType}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DarkTable;
