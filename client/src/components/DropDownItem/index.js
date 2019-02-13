import React from "react";
// import "./style.scss";

function DropDownItem(props) {
  return (
    <div
      className="dropdown-item"
      data-id={props.habitId}
      onClick={() => props.onClick(props.habitId)}
    >
      {props.name}
    </div>
  );
}

export default DropDownItem;
