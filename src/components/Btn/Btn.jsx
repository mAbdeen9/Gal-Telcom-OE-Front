import React from "react";
import classes from "./Btn.module.css";
const Btn = (props) => {
  return (
    <button onClick={props.onClick} className={classes.btnStyle}>
      {props.text}
    </button>
  );
};

export default Btn;
