import React from "react";

function Logo(props) {
  return (
    <div className={props.class}>
      <div>
        <i className="bi bi-building"> </i>
        <div style={{ display: "inline" }}>Gal</div>
      </div>
      <div>Tellcom</div>
    </div>
  );
}

export default Logo;
