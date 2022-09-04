import "./App.css";
import React, { Fragment } from "react";
import Router from "./components/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice";
import { useNavigate } from "react-router-dom";
import httpRequest from "./helpers/httpReq";

function App() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("meta-data")) || null;
    if (userInfo) {
      const checkVaildToken = async () => {
        try {
          await httpRequest("POST", "/login/valExpiredToken", userInfo.token);
        } catch (error) {
          nav("/login");
        }
      };
      checkVaildToken();
      dispatch(authActions.validator(userInfo));
    }
  }, []);

  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}

export default App;
