import React from "react";
import { useSelector } from "react-redux";
import Btn from "./Btn";
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
              <Gear id="vv5823" lable="נתב דגם AC VV5823" name="VV5823" />
              <Gear id="AIO" lable="נתב סיבים דגם AIO" name="AIO" />
              <Gear id="NOKIA" lable="מודם סיבים NOKIA" name="NOKIA" />
              <Gear id="MASTERBOX" lable="ממיר MASTERBOX" name="MASTERBOX" />
              <Gear id="ALTECH" lable="ממיר ALTECH" name="ALTECH" />
              <Gear id="MESH" lable="מגדיל טווח MESH" name="MESH" />
              <Gear id="DONGLE" lable="דונגל סלולרי" name="DONGLE" />
              <Gear id="MOCA" lable="MOCA" name="MOCA" />

              {/* <span className={classes.t1}>ציוד ללא סריאלי</span> */}

              <br />
              <Btn text="שלח" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
