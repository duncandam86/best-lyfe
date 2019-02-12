import React from "react";
import "./style.scss";

function DropDownComponent() {
  return (
    <div className="dropdown is-hoverable">

    {/* Dropdown Button */}
    <div className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span id="span1">Habits</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>

    {/* Dropdown Menu */}
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">

        <a href="#" className="dropdown-item is-active">
         Workout
        </a>
        <a className="dropdown-item">
          Drink 1L H20
        </a>
        <a href="#" className="dropdown-item">
          Read the News
        </a>
        
      </div>
    </div>
  </div>
  );
}

export default DropDownComponent;