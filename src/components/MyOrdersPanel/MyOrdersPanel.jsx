import React from "react";
import Border from "../Border/Border";
import Container from "../Container/Container";
import classes from "./MyOrdersPanel.module.css";

const data = [
  {
    id: "22",
    username: "מוחמד",
    dateTime: "2022-8-5 / 10:41:51",
    orderType: "Serial",
    order: [
      {
        name: "מודם סיבים NOKIA",
        value: "10",
        type: "serial",
      },
      {
        name: "נתב סיבים דגם AIO",
        value: "15",
        type: "serial",
      },
      {
        name: "נתב דגם AC VV5823",
        value: "5",
        type: "serial",
      },
      {
        name: "נתב דגם B35",
        value: "20",
        type: "serial",
      },
    ],
  },
];

function MyOrdersPanel() {
  return (
    <Container>
      <div className={classes.box}>
        <>
          ההזמנות ממוינות לפי תאריך ההזמנה , החל מההזמנה האחרונה , (סדר יורד)
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoj2i">
              💥 🗓
            </span>
          </div>
        </>
        <span className={classes.t1}>הזמנות סריאלי</span>
        <div className={classes.serial_box}>
          {data.map((oreder, index) => {
            return (
              <div key={index} className={classes.line}>
                <div>תאריך : {oreder.dateTime.split("/")[0]}</div>
                <div>
                  <button className={classes.btnStyle}>פרטי הזמנה</button>
                </div>
              </div>
            );
          })}
        </div>
        <Border />
        <span className={classes.t1}>הזמנות לא סריאלי</span>
        <div className={classes.serial_box}>
          {data.map((oreder, index) => {
            return (
              <div key={index} className={classes.line}>
                <div>תאריך : {oreder.dateTime.split("/")[0]}</div>
                <div>
                  <button className={classes.btnStyle}>פרטי הזמנה</button>
                </div>
              </div>
            );
          })}
        </div>
        <br />
      </div>
    </Container>
  );
}

export default MyOrdersPanel;
