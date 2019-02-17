import React, { Component } from "react";

import "./style.scss";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class TradNavbar extends Component {
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
      <nav id="nav">
        <div>
          <img
            id="nav-logo"
            src="../images/BestLyfe_Logo_Horizontal.png"
            alt="Best Lyfe logo"
          />
        </div>

        <div id="nav-items">
          <a href="/habits">Habits</a>
          <a href="/routine">Routine</a>
          <Link to="#" className="" onClick={this.logout}>
            <span id="logout">Logout</span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default TradNavbar;
