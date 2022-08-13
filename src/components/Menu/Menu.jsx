import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../../store/AuthSlice";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const searchPageHandler = () => {
    navigate("/search");
  };

  const homePageHandler = () => {
    navigate("/admin_panel");
  };

  const contolPageHandler = () => {
    navigate("/admin_control");
  };

  return (
    <div className={`container-fluid ${classes.box}`}>
      <div className="container">
        <div>
          <ul>
            {props.role && (
              <li className={classes.admin_role} onClick={homePageHandler}>
                ראשי
                <span className={classes.menuBtns}>
                  <i className="bi bi-house"></i>
                </span>
              </li>
            )}

            {props.role && (
              <li className={classes.admin_role} onClick={contolPageHandler}>
                ניהול &nbsp;
                <span className={classes.menuBtns}>
                  <i className="bi bi-gear"></i>
                </span>
              </li>
            )}

            {props.role && (
              <li className={classes.admin_role} onClick={searchPageHandler}>
                חיפוש
                <span className={classes.menuBtns}>
                  <i className="bi bi-search"></i>
                </span>
              </li>
            )}

            <li onClick={logoutHandler}>
              התנתק
              <span className={classes.menuBtns}>
                <i className="bi bi-power"></i>
              </span>
            </li>

            {!props.role && (
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
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
