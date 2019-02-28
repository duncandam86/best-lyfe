import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import "./style.scss";

import axios from "axios";
import Button from "../../components/ButtonLink";
import PieChart from "../../components/PieChart";
import SevenDayChart from "../../components/SevenDayChart";

import ButtonLinkIMG from "../../components/ButtonLinkIMG";

class Habits extends Component {
  state = {
    selectedHabit: {},
    redirect: null,
    splitString: "",
    reversedString: "",
    daysMet: "",
    totalDays: "",
    consecutiveDays: "",
    longestStreak: ""
  };

  componentDidMount() {
    const habitid = parseInt(this.props.match.params.id, 10);
    axios.get("/api/habits/" + habitid).then(res => {
      // console.log(res);
      this.setState({
        selectedHabit: res.data
      });

      //* State Global
      let recordArray = this.state.selectedHabit.recordArray;
      if (recordArray) {
        console.log("Record Array: " + recordArray);
        let splitString = recordArray.split("");
        // console.log(splitString);

        //* TOTAL DAYS is the sum of the record array - WORKS
        let totalDays = recordArray.length;
        console.log("Total Days: " + totalDays);

        //* DAYS MET = Record array
        let integerArray = splitString.map(Number);
        // console.log(integerArray);
        const daysMet = integerArray.reduce((total, amount) => total + amount);
        console.log("Days Met: " + daysMet);

        //* CONSECUTIVE DAYS
        let reversedString = splitString.reverse();
        let consecutiveDays;
        if (reversedString.indexOf("0") === -1) {
          consecutiveDays = integerArray.reduce(
            (total, amount) => total + amount
          );
        } else {
          consecutiveDays = reversedString.indexOf("0");
        }
        console.log("Consecutive Days " + consecutiveDays);

        //* LONGEST STREAK
        let longestStreak;
        // console.log(recordArray[0]);
        // console.log(recordArray.length)
        if (recordArray.length === 1 && recordArray[0] === '0') {
          longestStreak = 0;
        } 
        else if (recordArray.length === 1 && recordArray[0] === '1') {
          longestStreak = 1;
          console.log("longestStreak" + longestStreak);
        } 
        else if (recordArray.length > 1) {
          function streak(arr) {
            var i,
              temp,
              streak,
              highestStreakValue,
              length = arr.length,
              highestStreak = 0;

            for (i = 0; i < length; i++) {
              // check the value of the current entry against the last
              if (temp != "" && temp == arr[i]) {
                // it’s a match
                streak++;
              } else {
                // it’s not a match, start streak from 1
                streak = 1;
              }
              // set current letter for next time
              temp = arr[i];

              if (streak > highestStreak) {
                highestStreakValue = temp;
                highestStreak = streak;
              }
            }
            return [highestStreak, highestStreakValue];
          }
          console.log(streak(integerArray));
          let longStreak = streak(integerArray);
          // console.log(longStreak)
          longestStreak = longStreak[0];
        }
        //! Set the state so we can use the material in the render function
        this.setState({ splitString: splitString });
        this.setState({ reversedString: reversedString });
        this.setState({ totalDays: totalDays });
        this.setState({ daysMet: daysMet });
        this.setState({ consecutiveDays: consecutiveDays });
        this.setState({ longestStreak: longestStreak });
      }
      
    });
  }

  // updateStreak = streak => {
  //   console.log("in updateStreak", streak);
  //   //FOR TESTING
  //   streak = 4;
  //   //
  //   const selectedHabitStreak = this.state.selectedHabit.slice(0);
  //   console.log("selectedstreak", selectedHabitStreak);
  //   selectedHabitStreak.consecutive = streak;
  //   this.setState({
  //     selectedHabit: selectedHabitStreak
  //   });
  // };

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

  render() {
    // console.log("SH", this.state.selectedHabbit)

    //  console.log(this.state.splitString)

    // let array = [];

    // array.push(recordArray)
    // // console.log(array)
    // // console.log(array.length)
    // let splitArray = array[0].split('');
    // console.log(splitArray);

    // if (!this.state.selectedHabit)
    //   return null;
    // //console.log("Streak", this.state.selectedHabit.consecutive);
    // const hasStreak = this.state.selectedHabit.consecutive;
    const recArray = this.state.selectedHabit.recordArray;
    const longestStreak = this.state.selectedHabit.longestStreak;
    const madeSelection = this.state.selectedHabit.title;
    const hasTime = this.state.selectedHabit.time;
    let displayStatus = "hide";
    if (recArray) {
      displayStatus = "show";
    }
    // console.log(longestStreak)

    return this.state.redirect ? (
      <Redirect to="/routine" />
    ) : (
      <>
        <Navbar />
        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            <div id="habits-body">
              <div id="habits-header">
                <h2>{this.state.selectedHabit.title}</h2>
                {madeSelection ? (
                  <ButtonLinkIMG name="back" page="/routine" />
                ) : (
                  <div />
                )}
              </div>

              <div className={displayStatus}>
                {/* <hr /> */}
                <div id="streaks">
                  <h4>
                    Current Streak:{" "}
                    <span id="green">
                      {" "}
                      {this.state.consecutiveDays
                        ? this.state.consecutiveDays + " DAYS"
                        : "Start a new streak!"}
                    </span>
                  </h4>

                  <h4>
                    Longest Streak:{" "}
                    <span id="green">
                      {this.state.longestStreak
                        ? this.state.longestStreak + " DAYS"
                        : "Start your longest streak!"}
                    </span>
                  </h4>
                </div>

                <PieChart
                  totalDays={this.state.totalDays}
                  daysMet={this.state.daysMet}
                />
                <SevenDayChart
                  split={this.state.splitString}
                  reversed={this.state.reversedString}
                />

                <div>
                  {hasTime ? (
                    <div>
                      <h4>Time:</h4>
                      <p>{hasTime}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <h4>Comments:</h4>
                <p>{this.state.selectedHabit.comment}</p>
              </div>
              {!recArray && (
                <div id="no-data" className="is-size-3">
                  No Data to Display
                </div>
              )}
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
