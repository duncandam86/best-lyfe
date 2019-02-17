import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
//import "../../styles/shared.scss";
import "./style.scss";

import axios from "axios";

class Habits extends Component {
  state = {
    //habitArray: [],
    selectedHabit: {}
    //dropDownTitle: "Select a Habit"
  };

  componentDidMount() {
    const habitid = parseInt(this.props.match.params.id, 10);
    axios.get("/api/habits/" + habitid).then(res => {
      // console.log(res);
      this.setState({
        selectedHabit: res.data
      });
    });
  }

  updateStreak = streak => {
    console.log("in updateStreak", streak);
    //FOR TESTING
    streak = 4;
    //
    const selectedHabitStreak = this.state.selectedHabit.slice(0);
    console.log("selectedstreak", selectedHabitStreak);
    selectedHabitStreak.consecutive = streak;

    this.setState({
      selectedHabit: selectedHabitStreak
    });
  };

  // handleDropDownChange = habitid => {
  //   const filteredHabit = this.state.habitArray
  //     .slice(0)
  //     .filter(habit => habit.id === habitid);
  //   const selectedHabit = {
  //     id: filteredHabit[0].id,
  //     title: filteredHabit[0].title,
  //     consecutive: filteredHabit[0].consecutive,
  //     time: filteredHabit[0].time,
  //     comment: filteredHabit[0].comment
  //   };
  //   //console.log(selectedHabit);
  //   this.setState({
  //     dropDownTitle: filteredHabit[0].title,
  //     selectedHabit: selectedHabit
  //   });
  // };

  render() {
    //console.log("Streak", this.state.selectedHabit.consecutive);
    const hasStreak = this.state.selectedHabit.consecutive;
    const madeSelection = this.state.selectedHabit.title;
    const hasTime = this.state.selectedHabit.time;
    let displayStatus = "hide";
    if (madeSelection) {
      displayStatus = "show";
    }
    return (
      <>
        <Navbar />

        {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            {/* <div id="habits">
              <DropDownComponent
                habitArray={this.state.habitArray}
                selectedHabit={this.state.dropDownTitle}
                onClick={this.handleDropDownChange}
              />
              <img src="../../images/AddButton.png" />
            </div> */}
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
                <p>{this.state.selectedHabit.comment}</p>
              </div>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
