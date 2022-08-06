import React from "react";
import ReactDom from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";

function ModalOverlay(props) {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <div onClick={handleClick} className={classes.backdrop}>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay handleClick={props.handleClick}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
