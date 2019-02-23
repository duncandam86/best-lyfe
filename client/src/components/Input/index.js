import React from "react";

function Input(props) {
    // console.log(props);
    return (
 
    <div className="field">
    <label className="label is-size-4 is-size-5-mobile">{props.field}</label>
    <div className="control has-icons-left has-icons-right">
      <input
        className="input"
        type="text"
        placeholder="some text"
        {...props}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-user" />
      </span>
      <div id="email-err" className="err-text"></div>
    </div>
  </div>
  );
}

export default Input;
