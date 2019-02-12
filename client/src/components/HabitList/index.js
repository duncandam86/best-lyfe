import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.scss";

// This file exports both the List and ListItem components

export default function HabitListItem(props) {
  return (
    <label for={`habit${props.dataId}`} className="checkbox">
      <input
        type="checkbox"
        id={`habit${props.dataId}`}
        data-id={props.dataId}
      />
      {props.time ? (
        <div className="habit-item">
          <span className="habit-title is-paddingless">{props.title}</span>
          <br />
          <span className="habit-time is-paddingless">{props.time}</span>
        </div>
      ) : (
        <div className="habit-title is-paddingless">{props.title}</div>
      )}
    </label>
  );
}
