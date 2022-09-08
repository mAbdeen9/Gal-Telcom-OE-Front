import React from "react";

import Logo from "../../components/Logo/Logo";
import classes from "./Login.module.css";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { useState } from "react";
import { useEffect } from "react";
import httpRequest from "../../helpers/httpReq";
import { toast } from "react-toastify";

const Login = () => {
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErromsg] = useState(false);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    const inputValues = { phone: phoneValue, password: passwordValue };
    if (!formIsVaild) return;
    try {
      setConnecting(true);
      const res = await httpRequest("POST", "/login", "", inputValues);
      if (res.status === 200) {
        localStorage.setItem(
          "meta-data",
          JSON.stringify({
            ...res.data.data,
          })
        );
        dispatch(
          authActions.validator({
            ...res.data.data,
          })
        );
        if (res.data.data.role === "user") {
          navigate("/home", { replace: true });
        }
        if (res.data.data.role === "admin") {
          navigate("/admin_panel", { replace: true });
        }
      }
    } catch (err) {
      if (err.message === "Network Error") {
        toast(err.message);
      }
      setErromsg(true);
    }
    setConnecting(false);
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
            &nbsp; הזן את פרטיך
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
          <button className={classes.loginBtn}>
            {connecting ? "מתחבר ..." : "המשך"}
          </button>
          {errorMsg && (
            <span className={classes.error}>סיסמה או מספר טלפון שגויים</span>
          )}
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoji">
              📝 ⬅️
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
