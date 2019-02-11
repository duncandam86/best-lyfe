import React from "react";
import "./style.scss";

function DropDownComponent() {
  return (
    <div class="dropdown is-hoverable">

    {/* Dropdown Button */}
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span id="span1">Habits</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>

    {/* Dropdown Menu */}
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">

        <a href="#" class="dropdown-item is-active">
         Workout
        </a>
        <a class="dropdown-item">
          Drink 1L H20
        </a>
        <a href="#" class="dropdown-item">
          Read the News
        </a>
        
      </div>
    </div>
  </div>
  );
}

export default DropDownComponent;