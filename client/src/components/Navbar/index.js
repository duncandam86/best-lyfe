import React, { Component } from "react";
import "./style.scss";

// import { Redirect } from "react-router-dom";
// import { Route, Link } from "react-router-dom";
// import axios from "axios";

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
          {/* <a class="navbar-item">Home</a> */}
        </a>
        

      </nav>


    );
  }
}

export default Navbar;

