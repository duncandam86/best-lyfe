import React from "react";
import "./style.scss";
import DropDownItem from "../DropDownItem";

function DropDownComponent(props) {
  return (
    <div className="dropdown is-hoverable">
      {/* Dropdown Button */}
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span id="span1">{props.selectedHabit}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {props.habitArray.map(habit => (
            <DropDownItem
              key={habit.id}
              name={habit.title}
              habitId={habit.id}
              onClick={props.onClick}
            />
          ))

          /* <a href="#" className="dropdown-item is-active">
         Workout
        </a>
        <a className="dropdown-item">
          Drink 1L H20
        </a>
        <a href="#" className="dropdown-item">
          Read the News
        </a> */
          }
        </div>
      </div>
    </div>
  );
}

export default DropDownComponent;
