import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import "./style.scss";
import axios from "axios";

// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {

//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {

//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const targetDoc = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         targetDoc.classList.toggle('is-active');

//       });
//     });
//   }

// });

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

