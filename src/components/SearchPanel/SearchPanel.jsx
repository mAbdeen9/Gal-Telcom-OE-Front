import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import classes from "./SearchPanel.module.css";

const data = [
  {
    id: "22",
    username: "מוחמד",
    date: "2022-8-5 / 10:41:51",
    orderType: "Serial",
    orederStatus: "pending",
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

const NoSerialData = [
  {
    id: "22",
    username: "מוחמד",
    date: "2022-8-6 / 16:38:38",
    orderType: "noSerial",
    orederStatus: "pending",
    order: [
      {
        name: "FTTH drop fiber L=20",
        value: "10",
        type: "NoSerial",
      },
      {
        name: "FTTH drop fiber L=30",
        value: "15",
        type: "NoSerial",
      },
      {
        name: "FTTH drop fiber L=40",
        value: "15",
        type: "NoSerial",
      },
      {
        name: "FTTH drop fiber L=50",
        value: "10",
        type: "NoSerial",
      },
      {
        name: "מגשר אופטי קטן/קטן",
        value: "5",
        type: "NoSerial",
      },
      {
        name: "מגשר אופטי קטן/גדול",
        value: "10",
        type: "NoSerial",
      },
      {
        name: "קונקטורים אופטי",
        value: "10",
        type: "NoSerial",
      },
      {
        name: "שקע אף",
        value: "1",
        type: "NoSerial",
      },
      {
        name: "שקע טלפון",
        value: "10",
        type: "NoSerial",
      },
      {
        name: "שקע טלפון כפול",
        value: "5",
        type: "NoSerial",
      },
      {
        name: "שקע טלפון גוויס",
        value: "15",
        type: "NoSerial",
      },
      {
        name: "כבל רשת 100 מטר CAT5E",
        value: "1",
        type: "NoSerial",
      },
      {
        name: "כבל 100 מטר Coax RG59",
        value: "5",
        type: "NoSerial",
      },
      {
        name: "כבל  100 מטר דרופ 4 גידים",
        value: "3",
        type: "NoSerial",
      },
      {
        name: "חבילת קונקטורים RG6",
        value: "3",
        type: "NoSerial",
      },
      {
        name: "חבילת קונקטורים RG59",
        value: "3",
        type: "NoSerial",
      },
      {
        name: "חבילת Splice-Coax",
        value: "3",
        type: "NoSerial",
      },
      {
        name: "חבילת קליפסים",
        value: "3",
        type: "NoSerial",
      },
      {
        name: "איזולירבנד",
        value: "1",
        type: "NoSerial",
      },
      {
        name: "סיליקון",
        value: "3",
        type: "NoSerial",
      },
    ],
  },
];

function SearchPanel() {
  const serialRef = useRef();
  const noSerialRef = useRef();

  const [showMoadl, setShowMoadl] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [userDetails, setUserDetails] = useState("");

  const modalHandler = (data, date, id, username) => {
    setShowMoadl((state) => !state);
    setUserDetails({ date, id, username });
    setModalJsx(data);
  };

  const handleClickBackDrop = () => setShowMoadl((state) => !state);

  const serialHandler = () => {
    console.log(serialRef.current.value);
  };

  const noSerialHandler = () => {
    console.log(noSerialRef.current.value);
  };

  return (
    <Container>
      {showMoadl && (
        <Modal handleClick={handleClickBackDrop}>
          <h5>הזמנה עבור : {userDetails.username} </h5>
          <h5>מחסן טכנאי : {userDetails.id}</h5>
          <h5>תאריך : {userDetails.date}</h5>
          {modalJsx.map((list, index) => {
            return (
              <div className={classes.modal_style} key={index}>
                <div>- {list.name} </div>
                <div>
                  &nbsp;
                  <span role="img" aria-label="arrow img">
                    ⬅️
                  </span>
                  &nbsp;
                </div>
                <div> ( {list.value} )</div>
              </div>
            );
          })}
        </Modal>
      )}
      <div className={classes.box}>
        <>
          ההזמנות ממוינות לפי תאריך ההזמנה , החל מההזמנה האחרונה , (סדר יורד)
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoj2i">
              💥 🗓
            </span>
          </div>
        </>
        <span className={classes.t1}>לחפש הזמנות סריאלי </span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={serialRef}
          />{" "}
          &nbsp;
          <button onClick={serialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={classes.serial_box}>
          {data.map((order, index) => {
            return (
              <div key={index} className={classes.line}>
                <div>תאריך : {order.date}</div>
                <div>
                  <button
                    onClick={() => {
                      modalHandler(
                        order.order,
                        order.date,
                        order.id,
                        order.username
                      );
                    }}
                    className={
                      order.orederStatus === "pending"
                        ? classes.pending
                        : classes.btnStyle
                    }
                  >
                    פרטי הזמנה
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Border />
        <span className={classes.t1}>לחפש הזמנות לא סריאלי</span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={noSerialRef}
          />
          &nbsp;
          <button onClick={noSerialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={classes.serial_box}>
          {NoSerialData.map((order, index) => {
            return (
              <div key={index} className={classes.line}>
                <div>תאריך : {order.date}</div>
                <div>
                  <button
                    onClick={() => {
                      modalHandler(
                        order.order,
                        order.date,
                        order.id,
                        order.username
                      );
                    }}
                    className={classes.btnStyle}
                  >
                    פרטי הזמנה
                  </button>
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

export default SearchPanel;
