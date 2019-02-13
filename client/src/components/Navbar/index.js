import React, { Component } from "react";
import "./style.scss";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
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

        // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        targetDoc.classList.toggle("is-active");
      });
    });
  }
});



class Navbar extends Component {
//   constructor() {
//   super();
//   this.logout = this.logout.bind(this);
// }

// logout(event) {
//   event.preventDefault();
//   console.log("logging out");
//   axios
//     .post("/logout")
//     .then(response => {
//       console.log(response.data);
//       if (response.status === 200) {
//         this.props.updateUser({
//           loggedIn: false,
//           username: null
//         });
//       }
//     })
//     .catch(error => {
//       console.log("Logout error");
//     });
// }


  render() {
    return (
      <div>
        <nav className="navbar is-right" role="navigation" aria-label="main navigation">
          <div className="navbar-brand is-right">
            <img
              id="nav-logo"
              src="../images/BestLyfe_Logo_Horizontal.png"
              alt="Best Lyfe logo"
            />
            <Link
                to="#"
                className="btn btn-link text-secondary navbar-item"
                onClick={this.logout}
              >
                <span className="text-secondary">Logout</span>
              </Link>

            <a
              role="button"
              className="navbar-burger burger is-right"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span className="span" aria-hidden="true" />
              <span className="span" aria-hidden="true" />
              <span className="span" aria-hidden="true" />
            </a>
          </div>



          <div id="relative">
          <div class="navbar-dropdown is-right">


            <div id="navbarBasicExample" className="navbar-menu is-right">
              <div className="navbar-start is-right">
                <a className="navbar-item is-right" href="/routine">Routine</a>

                <a className="navbar-item is-right" href="/habits">Habits</a>
              </div>

              <div className="navbar-end">
                {/* <a className="navbar-item" href="" >Logout</a> */}
                
                
                
                {/* <Link
                to="#"
                className="btn btn-link text-secondary navbar-item"
                onClick={this.logout}
              >
                <span className="text-secondary">Logout</span>
              </Link> */}
                
                
               
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
    
      );
  }
}

export default Navbar;
