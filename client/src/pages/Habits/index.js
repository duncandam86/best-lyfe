import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import TradNavbar from "../../components/TradNavbar";
import BodyWrapper from "../../components/Bodywrapper";
import DropDownComponent from "../../components/DropDownComponent";
//import "../../styles/shared.scss";
import "./style.scss";
import Moment from "moment";
// import Moment from 'react-moment';
import axios from "axios";

class Habits extends Component {
  state = {
    habitArray: [],
    selectedHabit: {},
    dropDownTitle: "Select a Habit"
  };

  componentDidMount() {
    axios.get("/api/habits").then(res => {
      // console.log(res);
      this.setState({
        habitArray: res.data
      });
    });
  }

  getHabitStreak = () => {
    this.state.habitArray.forEach(habit => {
      console.log(habit);
      console.log("Updated at" + habit.updatedAt);

      //* current Date
      let d1 = new Date();
      //* last update Date
      let updatedAt = habit.updatedAt;
      let d2 = new Date(updatedAt);

      //* find out how long from this moment compared to the last update
      let diff = Math.abs(d1 - d2);
      console.log("Difference in Milliseconds + " + diff);
      let days = (diff / (1000 * 60 * 60 * 24)) % 7;
      console.log("Day's difference (raw streak)" + days);

      //* LOGIC
      if (days === 1 || days > 1) {
        let streak = 0;
        console.log("Streak is " + streak);
      } else {
        let streak = Math.floor(days);
        console.log("Streak is " + streak);
      }

      //*end GetHabitsStreak
    });
    //* end ComponentDidMount
  };

  handleDropDownChange = habitid => {
    const filteredHabit = this.state.habitArray
      .slice(0)
      .filter(habit => habit.id === habitid);
    const selectedHabit = {
      id: filteredHabit[0].id,
      title: filteredHabit[0].title,
      consecutive: filteredHabit[0].consecutive,
      time: filteredHabit[0].time,
      comment: filteredHabit[0].comment
    };
    //console.log(selectedHabit);
    this.setState({
      dropDownTitle: filteredHabit[0].title,
      selectedHabit: selectedHabit
    });
  };

  removeHabit() {
    axios.delete("api/habits/:id").then(res => {
      console.log(res);
      this.setState({
        DELETE: this.habit.id
      });
    });
  }

  render() {
    const hasStreak = this.state.selectedHabit.consecutive;
    const madeSelection = this.state.selectedHabit.title;
    const hasTime = this.state.selectedHabit.time;
    let displayStatus = "hide";
    if (madeSelection) {
      displayStatus = "show";
    }
    return (
      <>
        {/* <Navbar /> */}
        <TradNavbar />
        {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            <div id="habits">
              <DropDownComponent
                habitArray={this.state.habitArray}
                selectedHabit={this.state.dropDownTitle}
                onClick={this.handleDropDownChange}
              />
              <a href={"/habitsform"}>
                <img src="../../images/AddButton.png" />
              </a>
            </div>
            <div id="habits-body">
              <div id="habits-header">
                <h2>{this.state.selectedHabit.title}</h2>
                {madeSelection ? (
                  <div className="remove">
                    <h3>
                      <a>remove</a>
                    </h3>
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <hr />

              {/* <h3>Progress:</h3><figure></figure> */}

              <div className={displayStatus}>
                <h4>Streak:</h4>
                <p>
                  {hasStreak
                    ? hasStreak + " DAYS"
                    : "Start a new streak today!"}
                </p>

                <div>
                  {hasTime ? (
                    <div>
                      <h4>Time:</h4>
                      <p>{this.state.selectedHabit.time}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <h4>Comments:</h4>
                <p>{this.state.selectedHabit.consecutive}</p>
              </div>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
