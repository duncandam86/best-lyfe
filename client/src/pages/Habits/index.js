import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
// import HabitsComponent from "../../components/HabitsComponent";
import DropDownComponent from "../../components/DropDownComponent";
//import "../../styles/shared.scss";
import "./style.scss";
import Moment from "moment";
// import Moment from 'react-moment';
import axios from "axios";
import Button from "../../components/ButtonLink";
import PieChart from "../../components/PieChart";
import SevenDayChart from "../../components/SevenDayChart";

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
      console.log(res.data)
    });
  }

  handleDropDownChange = habitid => {
    const filteredHabit = this.state.habitArray
      .slice(0)
      .filter(habit => habit.id === habitid);
    const selectedHabit = {
      id: filteredHabit[0].id,
      title: filteredHabit[0].title,
      consecutive: filteredHabit[0].consecutive,
      longestStreak: filteredHabit[0].longestStreak,
      time: filteredHabit[0].time,
      comment: filteredHabit[0].comment
    };
    //console.log(selectedHabit);
    this.setState({
      dropDownTitle: filteredHabit[0].title,
      selectedHabit: selectedHabit
    });
  };

  removeSelectedHabit() {
    const selectedHabit = {};
    this.setState({
      dropDownTitle: "Select a Habit",
      selectedHabit: selectedHabit
    });
  }

  removeHabit = id => {
    axios
      .delete("api/habits/" + id)
      .then(res => {
        this.loadHabits();
        this.removeSelectedHabit();
      })
      .catch(err => console.log(err));
  };

  render() {
    const hasStreak = this.state.selectedHabit.consecutive;
    const longestStreak = this.state.selectedHabit.longestStreak;
    const madeSelection = this.state.selectedHabit.title;
    const hasTime = this.state.selectedHabit.time;
    let displayStatus = "hide";
    if (madeSelection) {
      displayStatus = "show";
    }
    // console.log(longestStreak)

    return (
      <>
    
        <Navbar />

        {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}

        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
             <DropDownComponent
                habitArray={this.state.habitArray}
                selectedHabit={this.state.dropDownTitle}
                onClick={this.handleDropDownChange}
              />
            
            <div id="habits-body">
              <div id="habits-header">
                <h2>{this.state.selectedHabit.title}</h2>
                {madeSelection ? (
                <Button name="back" page="/routine" />
// {/* <a href="/routine"><img src="../../images/BackArrow.png" width="32.5px" /></a> */}


                ) : (
                  <div />
                  
                )}
               
              </div>
         

              {/* <h3>Progress:</h3><figure></figure> */}

              <div className={displayStatus}>
                {/* <hr /> */}
                <div id="streaks">
                  <h4>Current Streak: <span id="green"> {hasStreak
                      ? hasStreak + " DAYS"
                      : "Start a new streak!"}</span></h4>

                  <h4>Longest Streak: <span id="green">{longestStreak
                      ? longestStreak + " DAYS"
                      : "Get started on your longest streak!"}</span></h4>
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
                  <h3><a>REMOVE HABIT</a></h3>
                </div>
            </div>
         
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
