import React, { Component } from "react";
import "./style.scss";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetDoc = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        targetDoc.classList.toggle("is-active");
      });
    });
  }
});

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <img
              id="nav-logo"
              src="../images/BestLyfe_Logo_Horizontal.png"
              alt="Best Lyfe logo"
            />

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="relative">
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item">Routine</a>

                <a class="navbar-item">Habits</a>
              </div>

              <div class="navbar-end">
                <a class="navbar-item">Logout</a>
              </div>
            </div>
          </div>
        </nav>
        {/* <header id="nav-bottom" /> */}
      </div>
    );
  }
}

export default Navbar;
