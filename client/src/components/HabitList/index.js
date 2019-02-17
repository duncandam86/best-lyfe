import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function HabitListItem(props) {
  return (
    <div id="habit-items" className="">
      <label className="label" htmlFor={props.dataId}>
        <input
          id={props.id}
          className="label__checkbox"
          type="checkbox"
          onClick={props.onClick}
          checked={props.isChecked}
          disabled={props.isDisabled}
        />
        {props.time ? (
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon" />
            </span>
            <div>
              <Link to={`/habits/${props.id}`}>
                <span className="habit-title">{props.title}</span>
                <span className="habit-time">{props.time}</span>
              </Link>
            </div>
          </span>
        ) : (
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon" />
            </span>
            <Link to={`/habits/${props.id}`}>
              <span className="habit-title">{props.title}</span>
            </Link>
          </span>
        )}
      </label>
    </div>
  );
}
