import React from "react";
import Btn from "../Btn/Btn";
import Gear from "../Gear/Gear";
import classes from "./OrderCard.module.css";

function OrderCard(props) {
  return (
    <div className={classes.orderBox}>
      <span className={classes.t1}>ציוד סריאלי</span>
      <form onSubmit={props.onSubmitCard}>
        <Gear serial={true} id="B35" lable="נתב דגם B35" name="B35" />
        <Gear
          serial={true}
          id="VV5823"
          lable="נתב דגם AC VV5823"
          name="VV5823"
        />
        <Gear serial={true} id="AIO" lable="נתב סיבים דגם AIO" name="AIO" />
        <Gear serial={true} id="NOKIA" lable="מודם סיבים NOKIA" name="NOKIA" />
        <Gear
          serial={true}
          id="MASTERBOX"
          lable="ממיר MASTERBOX"
          name="MASTERBOX"
        />
        <Gear serial={true} id="ALTECH" lable="ממיר ALTECH" name="ALTECH" />
        <Gear serial={true} id="MESH" lable="מגדיל טווח MESH" name="MESH" />
        <Gear serial={true} id="DONGLE" lable="דונגל סלולרי" name="DONGLE" />
        <Gear serial={true} id="MOCA" lable="MOCA" name="MOCA" />
        <br />
        <Btn text="שלח" />
      </form>
    </div>
  );
}

export default OrderCard;
