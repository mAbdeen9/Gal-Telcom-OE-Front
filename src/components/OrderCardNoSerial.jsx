import React from "react";
import Btn from "./Btn";
import Gear from "./Gear";
import classes from "./OrderCardNoSerial.module.css";

function OrderCardNoSerial(props) {
  return (
    <div className={classes.orderBox}>
      <span className={classes.t1}>ציוד ללא סריאל</span>
      <form onSubmit={props.onSubmitCard}>
        <Gear noserial={true} id="B35" lable="נתב דגם B35" name="B35" />
        <br />
        <Btn text="שלח" />
      </form>
    </div>
  );
}

export default OrderCardNoSerial;
