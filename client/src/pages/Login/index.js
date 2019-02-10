import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//components
import BodyWrapper from "../../components/Bodywrapper";
// import LargeLogo from "../../components/LargeLogo";
import Navbar from "../../components/Navbar";
import UserForm from "../../components/UserForm";
// import LoginError from "../../components/LoginError";

//other packages
import axios from "axios";
//styles
import "./style.scss";

const style = {
  error: {
    display: "none",
    color: "red",
    textAlign: "center"
  }
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: null,
      showError: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ", response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            userid: response.data.id
          });
          // update the state to redirect to home
          this.setState({
            redirect: true
          });
        } else if (response.status === 401) {
          console.log("invalid login, RED TEXT")
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error)
          console.log("invalid login")
          document.getElementById("login-error").style.display = "block";
      

      });
  }


  render() {
    return this.state.redirect ? (
      <Redirect to="/routine" />
    ) : (
      <div className="container is-fluid">
        <div className="columns is-mobile is-centered">
          <div className="column is-10">
            <div className="level is-marginless">
              <div className="level-item">
                <Navbar />
              </div>
            </div>
            <BodyWrapper txtAlign="left" title2="Log In">
              <UserForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                buttonName="Log In"
              />
              <div id="login-error" style={style.error}>
                <h2>Invalid User or Password</h2>
              </div>
            </BodyWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
