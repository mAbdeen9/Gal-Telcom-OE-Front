import React from "react";
import { Table } from "react-bootstrap";
import classes from "./DarkTable.module.css";

const dataFromApi = [
  {
    id: "22",
    username: "מוחמד",
    dateTime: "2022-8-7 / 20:45:50",
    orderType: "Serial",
    order: [
      {
        name: "נתב סיבים דגם AIO",
        value: "10",
        type: "serial",
      },
      {
        name: "נתב דגם AC VV5823",
        value: "10",
        type: "serial",
      },
      {
        name: "נתב דגם B35",
        value: "15",
        type: "serial",
      },
      {
        name: "מגדיל טווח MESH",
        value: "15",
        type: "serial",
      },
      {
        name: "ממיר ALTECH",
        value: "10",
        type: "serial",
      },
    ],
  },
];

function DarkTable() {
  return (
    <Table striped bordered hover variant="dark" className={classes.table_main}>
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
            <tr key={index}>
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
