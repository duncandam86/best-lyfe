import React, { Component } from "react";
import SubmitButton from "../ButtonSubmit";

class LoginForm extends Component {

  submitSignUp = () => {
    this.props.handleSubmit()
  }

  render () {

  const props = this.props;

  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half-tablet is-three-quarters-mobile">
        <div className="field">
          <label className="label is-size-4 is-size-5-mobile">E-Mail</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="you@where.what"
              name="userEmail"
              value={props.userEmail}
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
}

export default LoginForm;