import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitsComponent from "../../components/HabitsComponent"
//import "../../styles/shared.scss";
import "./style.scss";
import axios from "axios";

class Habits extends Component {

  state = {
    habitArray: []
  }
  
  componentDidMount() {
    axios.get("/api/habits").then(res => {
      // console.log(res);
      this.setState({
        habitArray: res.data
      })

      console.log(this.state.habitArray);
    })
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="">
          <div className="column is-10 has-text-centered">
            {/* <div className="container is-fluid"> */}
            <div className="level">
              <div className="level-item">

              </div>
            </div>
            <BodyWrapper title1="Your" title2="Habits">

              <HabitsComponent />

            </BodyWrapper>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Habits;
