import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import { Route, Link } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

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
          render={() => <Login updateUser={this.updateUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route path="/habits" render={() => <Habits />} />
        {/* <Route exact path="/routine" component={Routine} /> */}
      </div>
    );
  }
}

export default App;
