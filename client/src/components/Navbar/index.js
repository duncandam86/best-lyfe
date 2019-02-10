import React, { Component } from "react";
import "./style.scss";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img
          id="nav-logo"
          src="../images/BestLyfe_Logo_Horizontal.png"
          alt="Best Lyfe logo"
        />
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
