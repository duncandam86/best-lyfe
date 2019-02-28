import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function ButtonLinkIMG(props) {
  return (
    <div id="back-button">
      <Link className="" to={props.page}>
        {/* {props.name} */}
        <input type="image" src="../../images/BackArrow.png" />
      </Link>
    </div>
  );
}

export default ButtonLinkIMG;
