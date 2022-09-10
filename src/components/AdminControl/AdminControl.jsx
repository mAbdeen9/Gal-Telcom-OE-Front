import React from "react";
import { useRef } from "react";
import Container from "../Container/Container";
import classes from "./AdminControl.module.css";
import httpRequest from "../../helpers/httpReq";
import getToken from "../../helpers/getToken";
import { toast } from "react-toastify";

function AdminControl() {
  const usernameRef = useRef();
  const phoneNumberRef = useRef();
  const storeNumberRef = useRef();
  const passwordRef = useRef();
  const deletePhoneRef = useRef();
  const token = getToken();

  const restForm = () => {
    usernameRef.current.value = "";
    phoneNumberRef.current.value = "";
    storeNumberRef.current.value = "";
    passwordRef.current.value = "";
  };

  const creatNewUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name: usernameRef.current.value,
      phone: phoneNumberRef.current.value,
      id: storeNumberRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await httpRequest("POST", "/user/create-new-user", token, newUser);
      toast("משתמש חדש נוצר ");
      restForm();
    } catch (err) {
      toast("חלק מפרטי המשתמש אינם חוקיים");
    }
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    const userPhoneNum = deletePhoneRef.current.value;
    if (userPhoneNum.length <= 6) return;
    const user = { phone: userPhoneNum };
    try {
      await httpRequest("DELETE", "/user/delete-user", token, user);
      toast("המשתמש נמחק בהצלחה");
      deletePhoneRef.current.value = "";
    } catch (err) {
      console.log(err);
      toast(err.response.data.message);
    }
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
              <label htmlFor="userName">שם משתמש </label>{" "}
              <input ref={usernameRef} id="userName" type="text" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="phoneNumber">מספר טלפון </label>{" "}
              <input
                minLength="6"
                maxLength="12"
                ref={phoneNumberRef}
                id="phoneNumber"
                type="number"
              />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="store">מספר מחסן </label>{" "}
              <input ref={storeNumberRef} id="store" type="number" />
            </div>
            <div className={classes.input_box}>
              <label htmlFor="password">סיסמה </label>{" "}
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
              <label htmlFor="phoneNumber">מספר טלפון </label>{" "}
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
