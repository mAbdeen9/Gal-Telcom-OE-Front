import React from "react";
import classes from "./AdminGear.module.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckedOrderActions } from "../../store/CheckedOrder";

function AdminGear(props) {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(props.value);
  const checkBoxRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CheckedOrderActions.addToTheFinalOrder(selectOptionHadnler()));
  }, [value, checked]);

  const increment = () => {
    setValue((state) => {
      return (state = +state + 1);
    });
  };

  const decrement = () => {
    if (+value < 2) return;
    setValue((state) => {
      return (state = +state - 1);
    });
  };

  const inputChangeHadnler = () => setChecked((state) => !state);
  const selectOptionHadnler = () => {
    const orderDetails = {
      name: props.name,
      value: checkBoxRef.current.value,
      type: props.type,
    };

    if (!checked) {
      return {
        name: props.name,
        value: "--",
        type: props.type,
      };
    }

    return orderDetails;
  };

  return (
    <div onChange={selectOptionHadnler} className={classes}>
      <span>
        <input
          name={props.name}
          id={props.name}
          type="checkbox"
          checked={checked}
          onChange={inputChangeHadnler}
        />
        -<span> </span>
        <label htmlFor={props.name}> {props.name} </label>
      </span>
      <select
        name={props.name}
        id={props.name}
        disabled={!checked}
        ref={checkBoxRef}
      >
        <option>{value}</option>
      </select>
      <span onClick={increment}>+</span>

      <span onClick={decrement}>-</span>
    </div>
  );
}

export default AdminGear;
