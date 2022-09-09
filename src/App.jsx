import "./App.css";
import React, { Fragment } from "react";
import Router from "./components/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/AuthSlice";
import { useNavigate } from "react-router-dom";
import httpRequest from "./helpers/httpReq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("meta-data")) || null;
    if (userInfo) {
      const checkValidToken = async () => {
        try {
          await httpRequest("POST", "/login/valExpiredToken", userInfo.token);
        } catch (error) {
          console.log(error);
          nav("/login");
        }
      };
      checkValidToken();
      dispatch(authActions.validator(userInfo));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </Fragment>
  );
}

export default App;
