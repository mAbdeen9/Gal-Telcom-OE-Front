import React from "react";
import { useRef } from "react";
import Container from "../Container/Container";
import classes from "./AdminControl.module.css";

function AdminControl() {
  const usernameRef = useRef();
  const phoneNumberRef = useRef();
  const storeNumberRef = useRef();
  const passwordRef = useRef();
  const deletePhoneRef = useRef();

  const creatNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      storeNumber: storeNumberRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(newUser);
  };

  const deleteUser = (e) => {
    e.preventDefault();
    const userPhoneNum = deletePhoneRef.current.value;
    console.log(userPhoneNum);
  };

  return (
    <Container>
      <div className={classes.admin_panel_main}>
        <form onSubmit={creatNewUser}>
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
              <input ref={usernameRef} id="userName" type="text" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="phoneNumber">מספר טלפון : </label>{" "}
              <input ref={phoneNumberRef} id="phoneNumber" type="number" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="store">מספר מחסן : </label>{" "}
              <input ref={storeNumberRef} id="store" type="number" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="password">סיסמה : </label>{" "}
              <input ref={passwordRef} id="password" type="number" />
            </div>
            <div>
              <button className={classes.done}>בוצע</button>
            </div>
          </div>
        </form>
        <form onSubmit={deleteUser}>
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
              <input ref={deletePhoneRef} id="phoneNumber" type="number" />
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
