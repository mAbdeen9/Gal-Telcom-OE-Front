import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../../store/AuthSlice";
import classes from "./Menu.module.css";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const myOrdersHandler = (e) => {
    if (e.target.innerHTML.includes("שלי")) {
      navigate("/my-orders");
      return;
    }
    navigate("/home");
  };

  return (
    <div className={`container-fluid ${classes.box}`}>
      <div className="container">
        <div>
          <ul>
            <li onClick={logoutHandler}>
              התנתק
              <span className={classes.menuBtns}>
                <i className="bi bi-power"></i>
              </span>
            </li>
            <br />
            <li onClick={myOrdersHandler}>
              {location.pathname === "/home" ? "הזמנות שלי" : "דף הבית"}
              <span className={classes.menuBtns}>
                <i
                  className={
                    location.pathname === "/home"
                      ? "bi bi-bag-check"
                      : "bi bi-house"
                  }
                ></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
