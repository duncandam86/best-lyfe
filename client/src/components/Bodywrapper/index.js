import React, { Component } from "react";
import "./style.scss";

function BodyWrapper(props) {
  return (
    <div id="body-wrapper-wrapper">
      <div id="body-wrapper">
        <div id="body-header">
          {/* {props.title} */}
          <div id="header-wrapper">
            <h1>Live your</h1>
            <h2>Best Lyfe</h2>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default BodyWrapper;
