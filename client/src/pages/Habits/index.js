import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitsComponent from "../../components/HabitsComponent";
//import "../../styles/shared.scss";
import "./style.scss";
import axios from "axios";

class Habits extends Component {
  state = {
    habitArray: []
  };

  componentDidMount() {
    axios.get("/api/habits").then(res => {
      // console.log(res);
      this.setState({
        habitArray: res.data
      });

      console.log(this.state.habitArray);
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            <HabitsComponent />
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
