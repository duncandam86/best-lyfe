import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//components
import BodyWrapper from "../../components/Bodywrapper";
import UserForm from "../../components/UserForm";
import StartingNavbar from "../../components/StartingNavbar";

//other packages
import axios from "axios";

//styles
import "./style.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      password: "",
      usernameValid: "",
      invalidUsernameText: "",
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {

    console.log("sign-up handleSubmit, username: ", this.state.userEmail);
    event.preventDefault();

    let errorCount = 0;

    //E-Mail error handling
    if (!this.state.userEmail) {
      errorCount++
      document.getElementById("email-err").innerText = "Please enter an email"
    } else if (this.state.userEmail.indexOf("@") < 0) {
      errorCount++;
      document.getElementById("email-err").innerText = "Please enter a valid email (hint: where you @?";
    } else if (this.state.userEmail.indexOf(".") < 0) {
      errorCount++;
      document.getElementById("email-err").innerText = "Please enter a valid email (hint: End of discussion.  Period.";
    } else {
      document.getElementById("email-err").innerText = ""
    }

    //Password error handling
    if (!this.state.password) {
      errorCount++

      document.getElementById("pw-err").innerText = "Please enter a password"
    } else {
      document.getElementById("pw-err").innerText = ""
    }

    if (!this.state.password2) {
      errorCount++

      document.getElementById("pw2-err").innerText = "Please re-enter your password"
    } else if (this.state.password !== this.state.password2) {
      errorCount++

      document.getElementById("pw2-err").innerText = "Passwords Don't Match";
    } else {
      document.getElementById("pw2-err").innerText = ""
    }

    //Phone error handling
    if (!this.state.userPhone) {
      // errorCount++

      document.getElementById("phone-err").innerText = "Please enter a phone number."
    } else {
      document.getElementById("phone-err").innerText = ""
    }

    if (!errorCount) {
      console.log("We'll log you in shortly.")
      this.signUpUser()
    }

  }

  loginUser = () => {
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
  
  signUpUser = () => {
    //request to server to add a new username/password
    axios
      .post("api/signup/", {
        userEmail: this.state.userEmail,
        password: this.state.password,
        userPhone: this.state.userPhone,
        userFirstName: this.state.userFirstName,
        userLastName: this.state.userLastName
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          // this.props.history.replace("/habitsform");

          this.props.updateUser({
            loggedIn: true,
            userEmail: response.data.userEmail,
            userid: response.data.id,
          });

          // this.setState({
          //   redirect: true
          // })
          this.loginUser();
          
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("error: ", error.data);
        if (error.data === "username must be unique") {
          this.setState({
            usernameValid: "is-danger",
            invalidUsernameText: "Username must be unique"
          });
        }
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/habitsForm" />
    ) : (
        <>
          <StartingNavbar />
          <div className="container">
            <BodyWrapper txtAlign="left" title2="Sign Up">
              <UserForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                buttonName="Sign Up"
              />
            </BodyWrapper>
          </div>
        </>
      );
  }
}

export default Signup;
