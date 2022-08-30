import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.auth);

  const toggleBurger = () => {
    setShowMenu((state) => !state);
  };

  return (
    <Fragment>
      <div className={`container-fluid ${classes.navBox}`}>
        <div className="container">
          <div className={classes.nav}>
            <div onClick={toggleBurger} className={classes.boxBurger}>
              <i className="bi bi-list"> </i>
            </div>
            <div className={classes.wellcomBox}>
              ברוך הבא {user.name.split(" ")[0]}
              <span className={classes.emoji} role="img" aria-label="hi emoji">
                👋🏻
              </span>
            </div>
            <div className={classes.box}>
              <Logo class={classes.logo} />
            </div>
          </div>
        </div>
      </div>
      {showMenu && <Menu role={user.role}></Menu>}
    </Fragment>
  );
};

export default Header;
