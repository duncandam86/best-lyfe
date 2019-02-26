import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// styles
import "./App.scss";

// components
// pages
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Routine from "./pages/Routine";
import HabitsForm from "./pages/HabitsForm";
import UserProfile from "./pages/UserProfile";
import EditForm from "./pages/EditForm";
import EditProfile from "./pages/EditProfile"

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
    if (!this.state.loggedIn) {
      console.log("Log in, sucker")
    }
  }


  updateUser(userObject) {
    //console.log(userObject);
    this.setState({
      loggedIn: userObject.loggedIn,
      username: userObject.username,
      userid: userObject.userid
    });
  }

  getUser() {
    axios.get("/api/users").then(response => {
      //console.log("Get user response: ");
      //console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userid: response.data.user.id
        });
      } else {
        //console.log("Get user: no user");
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
          render={() => <Login updateUser={this.updateUser} persist={this.getUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route path="/habits/:id" component={Habits} />
        <Route exact path="/routine" component={Routine} />
        <Route exact path="/habitsform" component={HabitsForm} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route path="/edit/:id" component={EditForm} />
      </div>
    );
  }
}

export default App;
