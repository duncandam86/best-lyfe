import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

//components
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import SubmitButton from "../../components/ButtonSubmit";

//styles
import "./style.scss";

class HabitsForm extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    time: "",
    comment: "",
    redirect: null
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/newHabit", {
        title: this.state.title,
        time: this.state.time,
        comment: this.state.comment
      })
      .then(res => {
        console.log("completed update");
        this.setState({
          //redirect to habits page
          redirect: true
        });
      });
  };

  render() {
    //if state.redirect is not null, redirect to different page.
    return this.state.redirect ? (
      <Redirect to="/routine" />
    ) : (
      <div>
        <Navbar />
        <BodyWrapper txtAlign="centered" title1="New" title2="Habit">
          <div className="columns is-mobile is-centered">
            <div className="column is-half-tablet is-three-quarters-mobile">
              <div className="field">
                <label className="label is-size-4 is-size-5-mobile">
                  Name:
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Habit Name"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    maxlength="19"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4 is-size-5-mobile">
                  Time:
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Military Time - 14:30"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="far fa-clock" />
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label is-size-4 is-size-5-mobile">
                  Comment:
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="far fa-comment-alt" />
                  </span>
                </div>
              </div>
              <SubmitButton onClick={this.handleFormSubmit} text="Submit" />
            </div>
          </div>
        </BodyWrapper>
      </div>
    );
  }
}

export default HabitsForm;
