import React from "react";
import Btn from "../Btn/Btn";
import Gear from "../Gear/Gear";
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
          name="FTTH drop fiber L=20"
        />
        <Gear
          many={true}
          id="fiber-30"
          lable="FTTH drop fiber L=30"
          name="FTTH drop fiber L=30"
        />
        <Gear
          many={true}
          id="fiber-40"
          lable="FTTH drop fiber L=40"
          name="FTTH drop fiber L=40"
        />
        <Gear
          many={true}
          id="fiber-50"
          lable="FTTH drop fiber L=50"
          name="FTTH drop fiber L=50"
        />
        <Gear
          many={true}
          id="connector-fiber-s/s"
          lable="מגשר אופטי קטן/קטן"
          name="מגשר אופטי קטן/קטן"
        />
        <Gear
          many={true}
          id="connector-fiber-s/b"
          lable="מגשר אופטי קטן/גדול"
          name="מגשר אופטי קטן/גדול"
        />
        <Gear
          many={true}
          id="connector-fiber-green"
          lable="קונקטורים אופטי"
          name="קונקטורים אופטי"
        />
        <Gear many={true} id="nose-socket" lable="שקע אף" name="שקע אף" />
        <Gear many={true} id="socket-tel1" lable="שקע טלפון" name="שקע טלפון" />
        <Gear
          many={true}
          id="socket-tel2"
          lable="שקע טלפון כפול"
          name="שקע טלפון כפול"
        />
        <Gear
          many={true}
          id="socket-tel3"
          lable="שקע טלפון גוויס"
          name="שקע טלפון גוויס"
        />
        <Gear
          noserial={true}
          id="CAT5E"
          lable="כבל רשת 100 מטר CAT5E"
          name="כבל רשת 100 מטר CAT5E"
        />
        <Gear
          noserial={true}
          id="RG59"
          lable="כבל 100 מטר Coax RG59"
          name="כבל 100 מטר Coax RG59"
        />
        <Gear
          noserial={true}
          id="DROP"
          lable="כבל  100 מטר דרופ 4 גידים"
          name="כבל  100 מטר דרופ 4 גידים"
        />
        <Gear
          noserial={true}
          id="RG6-Connectors"
          lable="חבילת קונקטורים RG6"
          name="חבילת קונקטורים RG6"
        />
        <Gear
          noserial={true}
          id="RG59-Connectors"
          lable="חבילת קונקטורים RG59"
          name="חבילת קונקטורים RG59"
        />
        <Gear
          noserial={true}
          id="SPLICE-COAX"
          lable="חבילת Splice-Coax"
          name="חבילת Splice-Coax"
        />
        <Gear
          noserial={true}
          id="Clipsim"
          lable="חבילת קליפסים"
          name="חבילת קליפסים"
        />
        <Gear
          noserial={true}
          id="ISOLERBAND"
          lable="איזולירבנד"
          name="איזולירבנד"
        />
        <Gear noserial={true} id="Silcon" lable="סיליקון" name="סיליקון" />
        <br />
        <Btn text="שלח" />
      </form>
    </div>
  );
}

export default OrderCardNoSerial;
