import React from "react";
import Btn from "../Btn/Btn";
import Gear from "../Gear/Gear";
import classes from "./OrderCard.module.css";

function OrderCard(props) {
  return (
    <div className={classes.orderBox}>
      <span className={classes.t1}>ציוד סריאלי</span>
      <form onSubmit={props.onSubmitCard}>
        <Gear serial={true} id="B35" lable="נתב דגם B35" name="נתב דגם B35" />
        <Gear
          serial={true}
          id="VV5823"
          lable="נתב דגם AC VV5823"
          name="נתב דגם AC VV5823"
        />
        <Gear
          serial={true}
          id="AIO"
          lable="נתב סיבים דגם AIO"
          name="נתב סיבים דגם AIO"
        />
        <Gear
          serial={true}
          id="NOKIA"
          lable="מודם סיבים NOKIA"
          name="מודם סיבים NOKIA"
        />
        <Gear
          serial={true}
          id="MASTERBOX"
          lable="ממיר MASTERBOX"
          name="ממיר MASTERBOX"
        />
        <Gear
          serial={true}
          id="ALTECH"
          lable="ממיר ALTECH"
          name="ממיר ALTECH"
        />
        <Gear
          serial={true}
          id="MESH"
          lable="מגדיל טווח MESH"
          name="מגדיל טווח MESH"
        />
        <Gear
          serial={true}
          id="DONGLE"
          lable="דונגל סלולרי"
          name="דונגל סלולרי"
        />
        <Gear serial={true} id="MOCA" lable="MOCA" name="MOCA" />
        <br />
        <Btn text="שלח" />
      </form>
    </div>
  );
}

export default OrderCard;
