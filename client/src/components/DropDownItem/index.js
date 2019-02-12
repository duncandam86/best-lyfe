import React from "react";
// import "./style.scss";

function DropDownItem(props) {
  return (
      <>
        <a href="#" className="dropdown-item is-active">
          {props.name}
        </a>
      </>
  );
}

export default DropDownItem;