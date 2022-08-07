import React from "react";
import Container from "../Container/Container";
import classes from "./AdminPanel.module.css";

function DarkExample() {
  return (
    <table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
}

function AdminPanel() {
  return (
    <Container>
      <div className={classes.admin_panel_main}>
        <DarkExample></DarkExample>
      </div>
    </Container>
  );
}

export default AdminPanel;
