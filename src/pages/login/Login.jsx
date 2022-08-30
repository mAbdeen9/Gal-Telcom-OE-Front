import React from "react";

import Logo from "../../components/Logo/Logo";
import classes from "./Login.module.css";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import image from "../../assets/undraw_Login_re_4vu2.png";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [errorMsg, setErromsg] = useState(false);

  const {
    enterdValue: phoneValue,
    ValueIsValid: phoneIsVaild,
    hasError: phoneHasError,
    setIsTouched: setPhoneIsTouched,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    resetForm: resetPhone,
  } = useInput(
    (value) => value.trim().length >= 7 && value.trim().length <= 11
  );

  const {
    enterdValue: passwordValue,
    ValueIsValid: passwordIsVaild,
    hasError: passwordHasError,
    setIsTouched: setpasswordIsTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    resetForm: resetPassword,
  } = useInput((value) => value.length > 5 && value.length < 10);

  let formIsVaild = false;
  if (phoneIsVaild && passwordIsVaild) formIsVaild = true;

  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    setPhoneIsTouched(true);
    setpasswordIsTouched(true);
    if (!formIsVaild) return;
    const inputValues = { phone: phoneValue, password: passwordValue };
    console.log(inputValues);
    // try {
    //   const res = await fetch("http://localhost:3000/api/v1/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ phone: "0538327909", password: "102030" }),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    // } catch (err) {
    //   console.log(err.message);
    // }
    try {
      const res = await axios({
        method: "POST",
        url: "http://192.168.0.3:3000/api/v1/login",
        data: inputValues,
      });

      if (res.status === 200) {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
        dispatch(
          authActions.validator({
            ...res.data.data,
          })
        );
        console.log(res.data.data.role);

        if (res.data.data.role === "user") {
          navigate("/home", { replace: true });
        }
        if (res.data.data.role === "admin") {
          navigate("/admin_panel", { replace: true });
        }
      }
    } catch (err) {}

    resetPhone();
    resetPassword();
  };

  const phoneInputClasses = phoneHasError ? classes.invaildPhone : "";
  const passwordInputClasses = passwordHasError ? classes.invaildPassword : "";

  return (
    <div className={classes.main}>
      <div className={`${classes.loginBox}`}>
        <Logo class={classes.logo} />
        <form
          autoComplete="off"
          className={classes.formSize}
          onSubmit={formSubmissionHandler}
        >
          <div
            className={classes.user}
            style={{
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
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
              onChange={phoneChangeHandler}
              onBlur={phoneInputBlurHandler}
              value={phoneValue}
              type="phone"
              name="phoneNumber"
              id="phone number"
              className={phoneInputClasses}
            />
            {phoneHasError && <p className={classes.errorMsg}>מספר לא תקין</p>}
          </div>
          <div className={classes.inputBox}>
            <label style={{ opacity: "0.7" }} htmlFor="password">
              סיסמה
            </label>
            <input
              onChange={passwordChangeHandler}
              onBlur={passwordInputBlurHandler}
              value={passwordValue}
              type="password"
              name="password"
              id="password"
              className={passwordInputClasses}
            />
            {passwordHasError && (
              <p className={classes.errorMsg}>סיסמה שגויה</p>
            )}
          </div>
          <button className={classes.loginBtn}>המשך</button>
          {errorMsg && (
            <span className={classes.error}>סיסמה או מספר טלפון שגויים</span>
          )}
          <div>
            <img className={classes.imgLogin} src={image} alt="imgLogin" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
