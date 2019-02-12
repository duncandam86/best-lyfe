import React from "react";
// import "./style.scss";

function DropDownItem(props) {
  return (
      <>
        <a href="#" className="dropdown-item is-active" data-id={props.habitId}>
          {props.name} - {props.habitId}
        </a>
      </>
  );
}

export default DropDownItem;