import React from "react";
import logo from "../../images/large_BestLyfe_logo.png";
import "./style.scss";

function LargeLogo() {
  return (
    <figure className="image">
      <img src={logo} alt="large Best Lyfe logo" />
    </figure>
  );
}

export default LargeLogo;
