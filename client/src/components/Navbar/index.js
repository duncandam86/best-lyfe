import React, { Component } from "react";
import "./style.scss";
<<<<<<< HEAD
import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetDoc = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetDoc.classList.toggle('is-active');

      });
    });
  }
});
=======

// import { Redirect } from "react-router-dom";
// import { Route, Link } from "react-router-dom";
// import axios from "axios";
>>>>>>> 8046a0fb8879e4727e7841a756b874991571c95b

class Navbar extends Component {

  render() {
    return (

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <img id="nav-logo" src="../images/BestLyfe_Logo_Horizontal.png"  alt="Best Lyfe logo" ></img>
        

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            
            <a class="navbar-item">
              Routine
            </a>

            <a class="navbar-item">
              Habits
            </a>

          </div>

          <div class="navbar-end">
            <a class="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;