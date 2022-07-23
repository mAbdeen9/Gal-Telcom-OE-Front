import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo";
function Header() {
  return (
    <div className={`container-fluid ${classes.navBox}`}>
      <div className="container">
        <div className={classes.nav}>
          <div className={classes.boxBurger}>
            <i className="bi bi-list"> </i>
          </div>
          <div className={classes.box}>
            ברוך הבא מוחמד
            <span className={classes.emoji} role="img" aria-label="hi emoji">
              👋🏻
            </span>{" "}
          </div>
          <div className={classes.box}>
            <Logo class={classes.logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
