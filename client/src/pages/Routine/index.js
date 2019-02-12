import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//components
// import LargeLogo from "../../components/LargeLogo";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitListItem from "../../components/HabitList";
import SubmitButton from "../../components/ButtonSubmit";

//other packages
import axios from "axios";
//styles
import "./style.scss";

class Routine extends Component {
  state = {
    habits: []
  };

  componentDidMount() {
    this.loadHabits();
  }

  loadHabits = () => {
    axios
      .get("/api/habits")
      .then(response => {
        //console.log(response.data);
        this.setState({ habits: response.data });
      })
      .catch(err => console.log(err));
  };

  getCompletedHabits = () => {
    const habitsChecked = [];
    const habits = document.getElementsByTagName("input");
    const habitsArray = Array.prototype.slice.call(habits);
    //console.log(inputArray);
    const completedHabits = habitsArray.filter(habit => habit.checked === true);
    completedHabits.forEach(function(checkbox) {
      let checkedstatus = {};
      //console.log(checkbox.id, checkbox.checked);
      checkedstatus[checkbox.id] = checkbox.checked;
      habitsChecked.push(checkedstatus);
    });
    return habitsChecked;
    //console.log(habitsChecked);
  };

  handlePageSubmit = event => {
    event.preventDefault();
    const habits = this.getCompletedHabits();
    console.log(habits);
    axios
      .put("/api/habits", habits)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <BodyWrapper txtAlign="left" title1="Your" title2="Routine">
            <div className="columns is-centered">
              <div className="column is-four-fifths">
                {this.state.habits.length ? (
                  <div>
                    <div id="habit-list">
                      {this.state.habits.map(habit => (
                        <HabitListItem
                          key={habit.id}
                          dataId={habit.id}
                          title={habit.title}
                          time={habit.time}
                        />
                      ))}
                    </div>
                    <div className="level">
                      <div className="level-item has-text-centered">
                        <SubmitButton
                          text="Submit"
                          onClick={this.handlePageSubmit}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="title is-3">No Habits to Display</p>
                        <p>
                          <Link to="/habits" className="is-link is-size-5">
                            Go to the Habits page to create a new habit.
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </BodyWrapper>
        </div>
      </>
    );
  }
}

export default Routine;
