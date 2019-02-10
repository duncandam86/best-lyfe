import React from "react";
import "./style.scss";

function SubmitButton(props) {
  return (
    <div className="field">
      <div className="control">
        <button
          className="button is-large"
          onClick={props.onClick}
          type="submit"
        >
          {props.text}
        </button>
      </div>
    </div>
  );
}

export default SubmitButton;
