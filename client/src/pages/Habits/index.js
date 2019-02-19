import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import "./style.scss";

import axios from "axios";
import Button from "../../components/ButtonLink";
import PieChart from "../../components/PieChart";
import SevenDayChart from "../../components/SevenDayChart";

class Habits extends Component {
  state = {
    selectedHabit: {},
    redirect: null
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

  removeHabit = id => {
    console.log("removeHabit", id);
    axios
      .delete("/api/habits/" + id)
      .then(res => {
        this.setState({
          redirect: true
        });
      })
      .catch(err => console.log(err));
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
    const longestStreak = this.state.selectedHabit.longestStreak;
    const madeSelection = this.state.selectedHabit.title;
    const hasTime = this.state.selectedHabit.time;
    let displayStatus = "hide";
    if (madeSelection) {
      displayStatus = "show";
    }
    // console.log(longestStreak)

    return this.state.redirect ? (
      <Redirect to="/routine" />
    ) : (
      <>
        <Navbar />

        {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            <div id="habits-body">
              <div id="habits-header">
                <h2>{this.state.selectedHabit.title}</h2>
                {madeSelection ? (
                  <Button name="back" page="/routine" />
                ) : (
                  // {/* <a href="/routine"><img src="../../images/BackArrow.png" width="32.5px" /></a> */}

                  <div />
                )}
              </div>

              {/* <h3>Progress:</h3><figure></figure> */}

              <div className={displayStatus}>
                {/* <hr /> */}
                <div id="streaks">
                  <h4>
                    Current Streak:{" "}
                    <span id="green">
                      {" "}
                      {hasStreak ? hasStreak + " DAYS" : "Start a new streak!"}
                    </span>
                  </h4>

                  <h4>
                    Longest Streak:{" "}
                    <span id="green">
                      {longestStreak
                        ? longestStreak + " DAYS"
                        : "Get started on your longest streak!"}
                    </span>
                  </h4>
                </div>

                <PieChart />
                <SevenDayChart />

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
              <div className="remove">
                <h3>
                  <a
                    id={this.state.selectedHabit.id}
                    onClick={() =>
                      this.removeHabit(this.state.selectedHabit.id)
                    }
                  >
                    REMOVE HABIT
                  </a>
                </h3>
              </div>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
