import React from "react";
import Container from "../Container/Container";
import DarkTable from "../DarkTable/DarkTable";
import classes from "./AdminPanel.module.css";

function AdminPanel() {
  return (
    <Container>
      <div className={classes.admin_panel_main}>
        <h1 className={classes.t1}>
          <i className="bi bi-boxes"></i> הזמנות
        </h1>
        <div className={classes.emoji}>
          <span role="img" aria-label="emoji">
            📦 📥
          </span>
        </div>
        <DarkTable />
      </div>
    </Container>
  );
}

export default AdminPanel;
