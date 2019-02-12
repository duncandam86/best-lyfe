import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
// import HabitsComponent from "../../components/HabitsComponent";
import DropDownComponent from "../../components/DropDownComponent";
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
            <div id="habits">
              <DropDownComponent />
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
              <h4>Time:</h4>
              <p>6:30am{/* {props.Time} */}</p>

              <h4>Comments:</h4>
              <p>
                Mix of Legs, Arms, Cardio, Chest/Back{/* {props.Comments} */}
              </p>

              <button id="complete">Complete</button>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Habits;
