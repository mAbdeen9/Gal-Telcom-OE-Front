//
import React, { useState } from "react";
import classes from "./Login.module.css";

//

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={classes.main}>
      <div className={classes.loginBox}>
        <div className={classes.logo}>
          <div>
            <i className="bi bi-building"> </i>
            <div style={{ display: "inline" }}>Gal</div>
          </div>
          <div>Tellcom</div>
        </div>
        <form className={classes.formSize}>
          <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            <span role="img" aria-label="user image">
              👤
            </span>
            הזן את פרטיך
          </div>
          <div className={classes.inputBox}>
            <label style={{ opacity: "0.7" }} htmlFor="phone number">
              מספר טלפון
            </label>
            <input
              onChange={phoneNumberHandler}
              value={phoneNumber}
              type="number"
              name="phoneNumber"
              id="phone number"
            />
          </div>
          <div className={classes.inputBox}>
            <label style={{ opacity: "0.7" }} htmlFor="password">
              סיסמה
            </label>
            <input type="password" name="password" id="password" />
          </div>
          <button className={classes.loginBtn}>המשך</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
