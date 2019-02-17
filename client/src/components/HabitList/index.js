import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function HabitListItem(props) {
  let link;
  if (props.isDisabled) {
    if (props.time) {
      link = (
        <Link className="disable" to={`/habits/${props.id}`}>
          <span className="habit-title">{props.title}</span>
          <span className="habit-time">{props.time}</span>
        </Link>
      );
    } else {
      link = (
        <Link className="disable" to={`/habits/${props.id}`}>
          <span className="habit-title">{props.title}</span>
        </Link>
      );
    }
  } else {
    if (props.time) {
      link = (
        <Link to={`/habits/${props.id}`}>
          <span className="habit-title">{props.title}</span>
          <span className="habit-time">{props.time}</span>
        </Link>
      );
    } else {
      link = (
        <Link to={`/habits/${props.id}`}>
          <span className="habit-title">{props.title}</span>
        </Link>
      );
    }
  }
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
            <div>{link}</div>
          </span>
        ) : (
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon" />
            </span>
            {link}
          </span>
        )}
      </label>
    </div>
  );
}
