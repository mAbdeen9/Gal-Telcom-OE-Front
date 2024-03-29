import React from "react";
import classes from "./Gear.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderSerialActions } from "../../store/OrderSerialSlice";
import { OrderNoSerialActions } from "../../store/OrderNoSerialSlice";
import { useRef } from "react";

const Gear = (props) => {
  const dispatch = useDispatch();
  const checkBoxRef = useRef();
  const [selected, setSelected] = useState(true);
  const { name, id } = useSelector((state) => state.auth);

  const OrderHandler = (e) => {
    const selectedValue = {
      userDetails: {
        name,
        id,
      },
      orderDetails: {
        name: e.target.name,
        value: e.target.value === "--" ? null : e.target.value,
        type: props.serial ? "serial" : "NoSerial",
      },
    };

    if (props.serial) dispatch(OrderSerialActions.addToTheOrder(selectedValue));
    if (props.noserial || props.many)
      dispatch(OrderNoSerialActions.addToTheOrderNoSerial(selectedValue));
  };

  const selectedHandler = (e) => {
    checkBoxRef.current.value = "--";
    setSelected((state) => !state);
    if (!selected) {
      if (props.serial)
        dispatch(
          OrderSerialActions.removeNotSeltected({ name: e.target.name })
        );
      if (props.noserial || props.many)
        dispatch(
          OrderNoSerialActions.removeNotSeltectedOrderNoSerial({
            name: e.target.name,
          })
        );
    }
  };

  return (
    <div className={classes.line}>
      <div>
        <span>
          <input
            name={props.name}
            id={props.id}
            type="checkbox"
            onClick={selectedHandler}
          />
          -<span> </span>
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
