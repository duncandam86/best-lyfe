import React from "react";
import "./style.scss";

function DropDownComponent() {
  return (
    <div id="dropdown-div" className="dropdown"
  
    // className="is-active"
    >
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span id="span1">Habits</span>
          <span id="span2" className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <img id="addhabit-button" src="../images/DropDownArrow.png" />
          <span id="span4" className="icon is-small"></span>
        </button>
        <span id="span4" className="icon is-small"></span>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
          
          {/* Habit Example #1 */}
          Workout

          </a>
          <a className="dropdown-item">
          
            {/* Habit Example #2 */}
            Drink 1L of Water

          </a>
          <a href="#" className="dropdown-item is-active">

            {/* Habit Example #3 */}
            Talk to an old friend

          </a>
          {/* <a href="#" className="dropdown-item">
            Other dropdown item
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            With a divider
          </a> */}
        </div>
      </div>
    </div>

  );
}

export default DropDownComponent;