import React from "react";
import { useSelector } from "react-redux";
import Gear from "./Gear";
import classes from "./OrderPanel.module.css";

const OrderPanel = () => {
  const order = useSelector((state) => state.order);
  const handelSubmint = (e) => {
    e.preventDefault();
    console.log(order);
  };
  //
  return (
    <div className={`container-fluid   ${classes.mainPanel} `}>
      <div className="container">
        <div className={classes.boxPanel}>
          <div>
            <span className={classes.gradienText}>הזמנת ציוד בקליק </span>
          </div>
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoji">
              📦 🚀
            </span>
          </div>
          <div className={classes.orderBox}>
            <span className={classes.t1}>ציוד סריאלי</span>
            <form onSubmit={handelSubmint}>
              <Gear id="B35" lable="נתב דגם B35" name="B35" />
              <Gear id="AIO" lable="נתב דגם AIO" name="AIO" />
              <Gear id="vv5823" lable="נתב דגם AC vv5823" name="vv5823" />
              <button> click</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
