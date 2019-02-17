import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//components
import BodyWrapper from "../../components/Bodywrapper";
import Navbar from "../../components/Navbar";
// import TradNavbar from "../../components/TradNavbar";
import LoginForm from "../../components/LoginForm";
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
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
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
    console.log(this.state.userEmail, this.state.password)

    axios
      .post("/api/login", {
        userEmail: this.state.userEmail,
        password: this.state.password
      })
      .then(response => {
        //console.log("login response: ", response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            userid: response.data.userid
          });
          // update the state to redirect to home
          this.setState({
            redirect: true
          });
        } else if (response.status === 401) {
          console.log("invalid login, RED TEXT");
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
        console.log("invalid login");
        document.getElementById("login-error").style.display = "block";
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/routine" userId={this.state.userid} />
    ) : (
      <>
        <Navbar />
        {/* <TradNavbar /> */}
        <div className="container">
          <BodyWrapper txtAlign="left" title2="Login">
            <LoginForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              buttonName="Login"
            >
              <div id="login-error" style={style.error}>
                <h2>Invalid User or Password</h2>
              </div>
            </LoginForm>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Login;
