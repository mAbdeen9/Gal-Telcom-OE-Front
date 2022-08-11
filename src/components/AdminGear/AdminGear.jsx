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
    return () => {
      dispatch(CheckedOrderActions.reset());
    };
  }, []);

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
    <div onChange={selectOptionHadnler} className={classes.Admin_gear_box}>
      <div>
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
      </div>
      <div>
        <select
          name={props.name}
          id={props.name}
          disabled={!checked}
          ref={checkBoxRef}
          className={classes.select_box}
        >
          <option>{value}</option>
        </select>
      </div>

      <div className={classes.emoji}>
        <span role="img" aria-label="emoji" onClick={increment}>
          +
        </span>
        <span role="img" aria-label="emoji" onClick={decrement}>
          -
        </span>
      </div>
    </div>
  );
}

export default AdminGear;
