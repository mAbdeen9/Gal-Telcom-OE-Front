import React from "react";
import classes from "./Container.module.css";
function Container(props) {
  return (
    <div className={`container-fluid ${classes.main} `}>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Container;
