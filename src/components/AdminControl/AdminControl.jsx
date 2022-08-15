import React from "react";
import Container from "../Container/Container";
import classes from "./AdminControl.module.css";

function AdminControl() {
  return (
    <Container>
      <div className={classes.admin_panel_main}>
        <form>
          <div className={classes.card}>
            <h4 className={classes.t1}>
              <i className="bi bi-person-plus"></i> משתמש חדש
            </h4>
            <div className={classes.emoji}>
              <span role="img" aria-label="emoji">
                📝 🔮
              </span>
            </div>
            <div className={classes.input_box}>
              <label htmlFor="userName">שם משתמש : </label>{" "}
              <input id="userName" type="text" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="phoneNumber">מספר טלפון : </label>{" "}
              <input id="phoneNumber" type="number" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="store">מספר מחסן : </label>{" "}
              <input id="store" type="number" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="password">סיסמה : </label>{" "}
              <input id="password" type="number" />
            </div>
            <div>
              <button className={classes.done}>בוצע</button>
            </div>
          </div>
        </form>
        <form>
          <div className={classes.card}>
            <h4 className={classes.t1}>
              <i className="bi bi-person-x"></i> מחיקת משתמש
            </h4>
            <div className={classes.emoji}>
              <span role="img" aria-label="emoji">
                🗳 🗑
              </span>
            </div>
            <div className={classes.input_box}></div>
            <div className={classes.input_box}>
              <label htmlFor="phoneNumber">מספר טלפון : </label>{" "}
              <input id="phoneNumber" type="number" />
            </div>
            <div className={classes.input_box}></div>
            <div className={classes.input_box}></div>
            <div className={classes.input_box}></div>

            <div>
              <button className={classes.done}>בוצע</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AdminControl;
