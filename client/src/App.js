import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
// components
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
// styles
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
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
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>} */}
        {/* Routes to different components */}

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <Login updateUser={this.updateUser} />}
        />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
