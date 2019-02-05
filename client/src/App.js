import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'

class App extends Component {

  state = {
    "testValue": "getting..."
  }

  componentDidMount() {
    console.log("Mounting App");
    axios.get("/api/test")
      .then((res) => {
        console.log(res.data.test);
        this.setState({"testValue": res.data.test})
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Green Wayze App</h2>
        </div>
        <p className="App-intro">
          Test data is {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
