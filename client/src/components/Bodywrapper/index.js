import React from "react";
import "./style.scss";

function BodyWrapper(props) {
  return (
    <div id="bodywrapper">
    <div className={`card has-text-${props.txtAlign}`}>
      <div className="card-header has-text-centered has-text-white">
        <p className="is-size-3 is-size-5-mobile">{props.title1}</p>
        <p className="is-size-1 is-size-3-mobile">{props.title2}</p>
      </div>
      <div id="bodywrapper-body">
      {props.children}
      </div>
      </div>
      </div>
  );
}

export default BodyWrapper;
