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

  render() {
    return (
      <>
        <Navbar />

        {/*  this button console.logs the streak
        <button onClick={this.getHabitStreak}>CHECK ME</button> */}


        <div className="container">
          <BodyWrapper title1="Your" title2="Habits">
            <div id="habits">
              <DropDownComponent habitArray={this.state.habitArray} />
              <img src="../../images/AddButton.png" />
            </div>
            <div id="habits-body">
              <div id="habits-header">
                <h2>Workout {/* {props.Habit} */}</h2>
                <div className="remove">
                  <h3>
                    <a
                    // href={"/habits/" + habit._id}
                    >
                      remove
                    </a>
                  </h3>
                </div>
              </div>
              <hr />

              {/* <h3>Progress:</h3><figure></figure> */}

              <h4>Name:</h4>
              <p>Workout{/* {props.Name} */}</p>

              <h4>Streak:</h4>
              <p>5 DAYS{/* {props.Days} */}</p>

              <h4>Time:</h4>
              <p>6:30am{/* {props.Time} */}</p>

              <h4>Comments:</h4>
              <p>
                Mix of Legs, Arms, Cardio, Chest/Back{/* {props.Comments} */}
              </p>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
