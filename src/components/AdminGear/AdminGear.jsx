import React from "react";
import { useRef } from "react";
import { useState } from "react";
import classes from "./AdminGear.module.css";

function AdminGear(props) {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(props.value);

  const checkBoxRef = useRef();

  const increment = () => {
    setValue((state) => {
      return (state = +state + 1);
    });
    selectOptionHadnler();
  };

  const decrement = () => {
    setValue((state) => {
      return (state = +state - 1);
    });
    selectOptionHadnler();
  };

  const inputChangeHadnler = () => setChecked((state) => !state);
  const selectOptionHadnler = () => console.log(checkBoxRef.current.value);

  return (
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
      <select
        name={props.name}
        id={props.name}
        disabled={!checked}
        onChange={selectOptionHadnler}
        ref={checkBoxRef}
      >
        <option>{value}</option>
        <option>--</option>
      </select>
      <span onClick={increment}>+</span>
      <span onClick={decrement}>-</span>
    </div>
  );
}

export default AdminGear;
