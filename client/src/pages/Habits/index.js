import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
// import HabitsComponent from "../../components/HabitsComponent";
import DropDownComponent from "../../components/DropDownComponent";
//import "../../styles/shared.scss";
import "./style.scss";
import Moment from 'moment';
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

 

        //* current Date
        let d1 = new Date(); //"now"

        //* updatedAT Date
        let updatedAt = this.state.habitArray[0].updatedAt;
        let d2 = new Date(updatedAt)  // some date
        let diff = Math.abs(d1-d2);
        console.log("Difference in Milliseconds + "+diff)
        let days = ((diff / (1000*60*60*24)) % 7)
        console.log("Day's difference (raw streak)" + days)


  //* LOGIC
   if ((days) > 1) {
    let streak = Math.Floor(days)
    console.log("Streak is " + streak) 
   }else{
     let streak = 0;
     console.log("Streak is " + streak)
    }




      }
    )}

  // getHabitStreak = () => {
  //   this.state.habitArray.forEach(tile => {
  //   console.log("Updated at" + this.state.habitArray[0].updatedAt);
  //   console.log("created at" + this.state.habitArray[0].createdAt)
    

  //   const dateToFormat = this.state.habitArray[0].updatedAt;
  //   console.log(dateToFormat);
  // })
  // };


  render() {
    return (
      <>
        <Navbar />
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
