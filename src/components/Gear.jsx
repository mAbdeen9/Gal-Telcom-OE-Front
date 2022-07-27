import React from "react";
import { useState } from "react";
import classes from "./Gear.module.css";
const Gear = (props) => {
  const [selected, setSelected] = useState(true);
  const selectedHandler = (e) => {
    setSelected((state) => !state);
  };

  return (
    <div className={classes.line}>
      <div>
        <span>
          <input id={props.id} type="checkbox" onClick={selectedHandler} />-
          <span> </span>
          <label htmlFor={props.id}> {props.lable} </label>
        </span>
      </div>

      <div>
        <select disabled={selected} id={props.id} name={props.name}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Gear;
