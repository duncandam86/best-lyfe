import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// styles
import "./App.scss";

// components
import Signup from "./components/Signup";
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";


// pages
import SignupPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Routine from "./pages/Routine";
import HabitsForm from"./pages/HabitsForm";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      userid: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/users").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userid: response.data.user.id
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
          userid: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <LoginPage updateUser={this.updateUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route exact path="/habits" render={() => <Habits />} />
        <Route exact path="/routine" component={Routine} />
        <Route exact path="/habitsform" render={() => <HabitsForm />} />
      </div>
    );
  }
}

export default App;
