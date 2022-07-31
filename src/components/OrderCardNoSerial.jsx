import React from "react";
import Btn from "./Btn";
import Gear from "./Gear";
import classes from "./OrderCardNoSerial.module.css";

function OrderCardNoSerial(props) {
  return (
    <div className={classes.orderBox}>
      <span className={classes.t1}>ציוד לא סריאלי</span>
      <form onSubmit={props.onSubmitCard}>
        <Gear
          many={true}
          id="fiber-20"
          lable="FTTH drop fiber L=20"
          name="fiber-20"
        />
        <Gear
          many={true}
          id="fiber-30"
          lable="FTTH drop fiber L=30"
          name="fiber-30"
        />{" "}
        <Gear
          many={true}
          id="fiber-40"
          lable="FTTH drop fiber L=40"
          name="fiber-40"
        />{" "}
        <Gear
          many={true}
          id="fiber-50"
          lable="FTTH drop fiber L=50"
          name="fiber-50"
        />
        <Gear
          many={true}
          id="connector-fiber-s/s"
          lable="מגשר אופטי קטן/קטן"
          name="connector-fiber-s/s"
        />
        <Gear
          many={true}
          id="connector-fiber-s/b"
          lable="מגשר אופטי קטן/גדול"
          name="connector-fiber-s/b"
        />
        <Gear
          many={true}
          id="connector-fiber-green"
          lable="קונקטורים אופטי"
          name="connector-fiber-green"
        />
        <Gear many={true} id="nose-socket" lable="שקע אף" name="nose-socket" />
        <Gear
          many={true}
          id="socket-tel1"
          lable="שקע טלפון"
          name="socket-tel1"
        />
        <Gear
          many={true}
          id="socket-tel2"
          lable="שקע טלפון כפול"
          name="socket-tel2"
        />
        <Gear
          many={true}
          id="socket-tel3"
          lable="שקע טלפון גוויס"
          name="socket-tel3"
        />
        <Gear
          noserial={true}
          id="CAT5E"
          lable="כבל רשת 100 מטר CAT5E"
          name="CAT5E"
        />
        <Gear
          noserial={true}
          id="RG59"
          lable="כבל 100 מטר Coax RG59"
          name="RG59"
        />
        <Gear
          noserial={true}
          id="DROP"
          lable="כבל  100 מטר דרופ 4 גידים"
          name="DROP"
        />
        <Gear
          noserial={true}
          id="RG6-Connectors"
          lable="חבילת קונקטורים RG6"
          name="RG6-Connectors"
        />
        <Gear
          noserial={true}
          id="RG59-Connectors"
          lable="חבילת קונקטורים RG59"
          name="RG59-Connectors"
        />
        <Gear
          noserial={true}
          id="SPLICE-COAX"
          lable="חבילת Splice-Coax"
          name="SPLICE-COAX"
        />
        <Gear
          noserial={true}
          id="ISOLERBAND"
          lable="איזולירבנד"
          name="ISOLERBAND"
        />
        <br />
        <Btn text="שלח" />
      </form>
    </div>
  );
}

export default OrderCardNoSerial;
