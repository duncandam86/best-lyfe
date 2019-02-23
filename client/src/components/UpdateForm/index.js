import React, { Component } from "react";
import SubmitButton from "../ButtonSubmit";
import "./style.css"

class UserForm extends Component {

  render() {

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
                name="email"
                value={userInfo.email}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <div id="email-err" className="err-text"></div>
            </div>
          </div>

          {/* First Name */}
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">First Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Jamie"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <div id="fn-err" className="err-text"></div>
            </div>
          </div>

          {/* Last Name */}
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">Last Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Smith"
                name="lastName"
                value={userInfo.lastName}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <div id="ln-err" className="err-text"></div>
            </div>
          </div>

          {/* PHONE NUMBER */}
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">Phone Number</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="XXX-XXX-XXXX"
                name="phone"
                value={userInfo.phone}
                onChange={this.state.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
              <div id="phone-err" className="err-text"></div>
            </div>
          </div>

          {/* PICTURE */}
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">Photo (link)</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder={userInfo.photo}
                name="photo"
                value={this.state.photo}
                onChange={this.state.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
              <div id="photo-err" className="err-text"></div>
            </div>
          </div>

          <SubmitButton onClick={this.props.handleSubmit} text={props.buttonName} />
          {props.children}

          <div id="disclaimer">Best Lyfe will only use your contact info for notifications, we have no interest in contacting you for any other reason and promise to not share your contact information with any third party sources, except the FBI.  We're not going to court or jail for you.</div>
          {/* wrapper ends  */}
        </div>
      </div>
    );
  }
}

export default UserForm;