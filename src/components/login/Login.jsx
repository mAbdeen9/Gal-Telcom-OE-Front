import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./Login.module.css";

const Login = () => {
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
  } = useInput((value) => value.length > 6 && value.length < 10);

  let formIsVaild = false;
  if (phoneIsVaild && passwordIsVaild) formIsVaild = true;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setPhoneIsTouched(true);
    setpasswordIsTouched(true);
    if (!formIsVaild) return;
    console.log(123);
    resetPhone();
    resetPassword();
  };

  const phoneInputClasses = phoneHasError ? classes.invaildPhone : "";
  const passwordInputClasses = passwordHasError ? classes.invaildPassword : "";
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
              type="number"
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
          <div>
            <img
              className={classes.imgLogin}
              src="/undraw_Login_re_4vu2.png"
              alt="imgLogin"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
