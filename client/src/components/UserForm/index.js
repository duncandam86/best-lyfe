import React, { Component } from "react";
import SubmitButton from "../ButtonSubmit";
import "./style.css"

class UserForm extends Component {

  render () {

  const props = this.props;

  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half-tablet is-three-quarters-mobile">

      {/* EMAIL */}
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
            <div id="email-err" className="err-text"></div>
          </div>
        </div>

      {/* PASSWORD */}
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
            <div id="pw-err" className="err-text"></div>
          </div>
        </div>

      {/* REPEAT PASSWORD */}
        <div className="field">
          <label className="label is-size-4 is-size-5-mobile">Repeat Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Repeat Password"
              name="password2"
              value={props.password2}
              onChange={props.handleChange}
            />            
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
            <div id="pw2-err" className="err-text"></div>
          </div>
        </div>

      {/* PHONE NUMBER */}
        <div className="field">
          <label className="label is-size-4 is-size-5-mobile">Phone Number (no spaces or dashes)</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="XXX-XXX-XXXX"
              name="userPhone"
              value={props.userPhone}
              onChange={props.handleChange}
            />            
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
            <div id="phone-err" className="err-text"></div>
          </div>
        </div>

        <SubmitButton onClick={this.props.handleSubmit} text={props.buttonName} />
        {props.children}
      </div>
    </div>
  );
  }
}

export default UserForm;
