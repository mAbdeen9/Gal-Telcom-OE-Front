import React from "react";
import classes from "./Gear.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { OrderActions } from "./../store/OrderSlice";
import { useRef } from "react";

const Gear = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(true);
  const checkBoxRef = useRef();
  const OrderHandler = (e) => {
    const selectedValue = {
      name: e.target.name,
      value: e.target.value === "--" ? null : e.target.value,
    };
    console.log(selectedValue);
    dispatch(OrderActions.addToTheOrder(selectedValue));
  };

  const selectedHandler = (e) => {
    checkBoxRef.current.value = "--";
    setSelected((state) => !state);
    if (!selected) {
      dispatch(OrderActions.removeNotSeltected({ name: e.target.id }));
    }
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
        {props.serial && (
          <select
            onChange={OrderHandler}
            disabled={selected}
            id={props.id}
            name={props.name}
            ref={checkBoxRef}
          >
            {props.id === "MOCA" ? (
              <>
                <option>--</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </>
            ) : (
              <>
                <option>--</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </>
            )}
          </select>
        )}

        {props.noserial && (
          <select
            onChange={OrderHandler}
            disabled={selected}
            id={props.id}
            name={props.name}
            ref={checkBoxRef}
          >
            <>
              <option>--</option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
            </>
          </select>
        )}
        {props.many && (
          <select
            onChange={OrderHandler}
            disabled={selected}
            id={props.id}
            name={props.name}
            ref={checkBoxRef}
          >
            <>
              <option>--</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </>
          </select>
        )}
      </div>
    </div>
  );
};

export default Gear;
