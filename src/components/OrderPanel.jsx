import React from "react";
import classes from "./OrderPanel.module.css";
function OrderPanel() {
  return (
    <div className={`container-fluid ${classes.mainPanel}`}>
      <div className="container">
        <div className={classes.boxPanel}>
          <div>
            <span className={classes.gradienText}>הזמנת ציוד בקליק </span>
          </div>
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoji">
              🤩
            </span>
          </div>
          <div className={classes.orderBox}>Panel</div>
        </div>
      </div>
    </div>
  );
}

export default OrderPanel;
