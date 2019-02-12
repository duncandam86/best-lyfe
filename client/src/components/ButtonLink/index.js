import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Button(props) {
  return (
    <Link className="button is-large" to={props.page}>
      {props.name}
    </Link>
  );
}

export default Button;
