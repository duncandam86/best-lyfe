import React, { Component } from "react";
import "./style.scss";
import { Redirect, Link } from "react-router-dom";
// import withClickOutside from "../HOC/withClickOutside";

import axios from "axios";

class StartingNavbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  state = {
    username: "",
    password: "",
    redirect: null,
    showError: null
  };

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/logout")
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            loggedIn: false,
            username: null,
            redirect: true
          });
          console.log("logged out");
        }
      })
      .catch(error => {
        console.log("Logout error");
        console.log(error);
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/login" userId={this.state.userid} />
    ) : (
      <div>
        <div
          className="navbar is-right"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand is-right">
            <img
              id="nav-logo"
              src="../images/BestLyfe_Logo_Horizontal.png"
              alt="Best Lyfe logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StartingNavbar;
