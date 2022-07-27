import React from "react";
import classes from "./Gear.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { OrderActions } from "./../store/OrderSlice";
import { useEffect } from "react";
let lastSelectedObj = {};
const Gear = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    if (!selected) {
      dispatch(OrderActions.addToTheOrder(lastSelectedObj));
    }
  }, [selected]);

  const OrderHandler = (e) => {
    const selectedValue = {
      name: e.target.name,
      value: e.target.value === "--" ? null : e.target.value,
    };

    lastSelectedObj = selectedValue;

    dispatch(OrderActions.addToTheOrder(selectedValue));
  };

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
        <select
          onChange={OrderHandler}
          disabled={selected}
          id={props.id}
          name={props.name}
        >
          <option>--</option>
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
