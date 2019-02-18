import React, { Component } from "react";
import "./style.scss";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import withClickOutside from "../HOC/withClickOutside";

import axios from "axios";


class Navbar extends Component {
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
        <nav
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
            

            <a
              role="button"
              className={"navbar-burger burger is-right" + (this.props.isOpen ? " is-active" : "")}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.props.toggleOpen}
            >
              <span className="span" aria-hidden="true" />
              <span className="span" aria-hidden="true" />
              <span className="span" aria-hidden="true" />
            </a>
          </div>

          <div id="relative">
            <div className="navbar-dropdown is-right">
              <div id="navbarBasicExample" className={"navbar-menu is-right" + (this.props.isOpen ? " is-active" : "")}>
                <div className="navbar-start is-right">
                  <a className="navbar-item is-right" href="/routine">
                    Routine
                  </a>

                  <a className="navbar-item is-right" href="/habits">
                    Habits
                  </a>
                  <a className="navbar-item is-right" href="/habitsform">
                    New Habit
                  </a>
                </div>

                <div className="navbar-end">

                  <Link
                to="#"
                className="btn btn-link text-secondary navbar-item"
                onClick={this.logout}
              >
                <span className="text-secondary">Logout</span>
              </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withClickOutside(Navbar);
