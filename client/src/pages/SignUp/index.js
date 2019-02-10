import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//components
import BodyWrapper from "../../components/Bodywrapper";
import LargeLogo from "../../components/LargeLogo";
import UserForm from "../../components/UserForm";
//other packages
import axios from "axios";
//styles
import "./style.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ", this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("api/signup/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirect: true
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ", error);
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/login" />
    ) : (
      <div className="container is-fluid">
        <div className="columns is-mobile is-centered">
          <div className="column is-10">
            <div className="level is-marginless">
              <div className="level-item">
                <LargeLogo />
              </div>
            </div>
            <BodyWrapper txtAlign="left" title2="Sign Up">
              <UserForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </BodyWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
