import React from "react";
import { Table } from "react-bootstrap";
import classes from "./DarkTable.module.css";

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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkTable;
