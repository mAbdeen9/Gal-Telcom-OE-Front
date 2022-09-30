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
          id="connector-fiber-b/b"
          lable="מגשר אופטי גדול/גדול"
          name="מגשר אופטי גדול/גדול"
        />
        <Gear
          many={true}
          id="connector-fiber-s/b"
          lable="מגשר אופטי קטן/גדול"
          name="מגשר אופטי קטן/גדול"
        />
        <Gear
          many={true}
          id="connector-fiber-green-s-b"
          lable="קונקטורים אופטי קטן/גדול"
          name="קונקטורים אופטי  קטן/גדול"
        />
        <Gear
          many={true}
          id="connector-fiber-green-s-s"
          lable="קונקטורים אופטי קטן/קטן"
          name="קונקטורים אופטי  קטן/קטן"
        />
        <Gear many={true} id="nose-socket" lable="שקע אף" name="שקע אף" />
        <Gear
          many={true}
          id="nose-socket-cat5e"
          lable="שקע rj45"
          name="שקע rj45"
        />

        <Gear many={true} id="socket-tel1" lable="שקע טלפון" name="שקע טלפון" />
        <Gear
          many={true}
          id="socket-tel2"
          lable="שקע טלפון כפול"
          name="שקע טלפון כפול"
        />
        <Gear
          many={true}
          id="socket-tel12"
          lable=" שקע טלפון חיצוני"
          name="שקע טלפון חיצוני"
        />
        <Gear
          many={true}
          id="socket-tel24"
          lable=" שקע טלפון כפול חיצוני"
          name="שקע טלפון כפול חיצוני"
        />
        <Gear
          many={true}
          id="socket-tel3"
          lable="שקע טלפון גוויס"
          name="שקע טלפון גוויס"
        />
        <Gear
          many={true}
          id="socket-tel4"
          lable=" שקע טלפון גוויס כפול"
          name="שקע טלפון גוויס כפול"
        />

        <Gear
          many={true}
          id="מפצל קואקס 4/1"
          lable="מפצל קואקס 4/1"
          name="מפצל קואקס 4/1"
        />

        <Gear
          many={true}
          id="מפצל קואקס 3/1"
          lable="מפצל קואקס 3/1"
          name="מפצל קואקס 3/1"
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
          id="DROP-opti-250"
          lable=" תוף טקטי סיב 250 מטר"
          name="תוף טקטי סיב 250 מטר"
        />

        <Gear
          noserial={true}
          id="mechanical-optical-connectors"
          lable="חבילת מחברים  מכניים "
          name=" חבילת מחברים אופטיים מכניים"
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
          id="RJ45-Connectors"
          lable="חבילת קונקטורים RJ45"
          name="חבילת קונקטורים RJ45"
        />
        <Gear
          noserial={true}
          id="SPLICE-COAX"
          lable="חבילת Splice-Coax"
          name="חבילת Splice-Coax"
        />
        <Gear
          noserial={true}
          id="Clipsim6"
          lable=" חבילת קליפסים 6"
          name="6 חבילת קליפסים"
        />
        <Gear
          noserial={true}
          id="Clipsim4"
          lable="חבילת קליפסים 4"
          name="4 חבילת קליפסים"
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
