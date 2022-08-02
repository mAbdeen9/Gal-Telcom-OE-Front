import React from "react";
import classes from "./MessageCard.module.css";
function MessageCard(props) {
  return <div className={classes.cardBox}>{props.message}</div>;
}

export default MessageCard;
