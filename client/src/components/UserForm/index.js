import React from "react";
import SubmitButton from "../ButtonSubmit";

function UserForm(props) {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half-tablet is-three-quarters-mobile">
        <div className="field">
          <label className="label is-size-4 is-size-5-mobile">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={props.username}
              onChange={props.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label is-size-4 is-size-5-mobile">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={props.password}
              onChange={props.handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </div>
        </div>
        <SubmitButton onClick={props.handleSubmit} text={props.buttonName} />
        {props.children}
      </div>
    </div>
  );
}

export default UserForm;
