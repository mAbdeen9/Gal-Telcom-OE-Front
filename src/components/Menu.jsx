import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import classes from "./Menu.module.css";

function Menu() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
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
            <li>
              הזמנות שלי
              <span className={classes.menuBtns}>
                <i className="bi bi-bag-check"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
