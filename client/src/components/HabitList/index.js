import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.scss";

// This file exports both the List and ListItem components

export default function HabitListItem(props) {
  return (
    <label htmlFor={props.dataId} className="checkbox">
      <input type="checkbox" id={props.dataId} />
      {props.time ? (
        <div className="habit-item">
          <span className="habit-title is-paddingless">{props.title}</span>
          <span className="habit-time">{props.time}</span>
        </div>
      ) : (
        <div className="habit-title is-paddingless">{props.title}</div>
      )}
    </label>
  );
}
