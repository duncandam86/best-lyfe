import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
// import logo from '../logo.svg';
// import '../App.css';
import "./style.scss";
import axios from "axios";

class Navbar extends Component {

  render() {
    return (
      <nav>
        <img id="nav-logo" src="../images/BestLyfe_Logo_Horizontal.png" />
             <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
      </nav>
    );
  }
}

export default Navbar;
    