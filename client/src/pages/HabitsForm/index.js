import React, { Component } from "react";
import axios from "axios";

//components
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";

//styles
import "./style.scss";



class HabitsForm extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
 
    //   alert(`Habit: ${this.state.habitName} + ${this.state.habitTime} + ${this.state.habitComment}`);
      this.setState({
        habitName: "",
        habitTime: "",
        habitComment: ""
      });

        axios.post("api/newHabit", {
            title: this.state.habitName,
            time: this.state.habitTime,
            comment: this.state.habitComment
        })
        console.log("completed update");

    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
            <Navbar />
            <BodyWrapper
             txtAlign="centered"
             title1="New"
             title2="Habit">

          <form className="form">

            {/* Habit Name Input */}
            <label>Name:</label>
            <input
              value={this.state.habitName}
              name="habitName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Ex: Workout"
            />

            {/* Habit Time Input */}
            <label>Time:</label>
            <input
              value={this.state.habitTime}
              name="habitTime"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Ex: 6:30am"
            />

            {/* Habit Comment Input */}
            <label>Comment:</label>
             <input
              value={this.state.habitComment}
              name="habitComment"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Ex: Legs/Arms/Back&Chest/Cardio"
            />

            <div id="submit-form-div">
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
          </form>

          </BodyWrapper>
        </div>
      );
    }
  }
  
  export default HabitsForm;
  