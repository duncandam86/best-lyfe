import React, { Component } from "react";
import { Link } from "react-router-dom";
//components

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitListItem from "../../components/HabitList";

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
        let allHabits = response.data;
        allHabits.forEach(habit => {
          let isUpdated = this.checkIfUpdated(habit.updatedAt);
          if (isUpdated) {
            habit.checked = true;
            habit.disabled = true;
          } else {
            habit.checked = false;
            habit.disabled = false;
          }
          return habit;
        });
        this.setState({ habits: allHabits });
        //console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  checkIfUpdated = habitDate => {
    const todayDate = new Date().getDate();
    const habitD = new Date(habitDate).getDate();
    if (todayDate - habitD === 0) {
      return true;
    } else {
      return false;
    }
  };

  handleHabitClick = event => {
    event.preventDefault();
    //console.log(event.target.id);
    const checkedHabit = this.state.habits.filter(
      habit => habit.id === +event.target.id
    );

    axios
      .put("/api/habits/" + event.target.id, checkedHabit)
      .then(response => {
        this.loadHabits();
        //console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    //console.log("Routine habits", this.state.habits);
    return (
      <>
        <Navbar />
        {/* <TradNavbar /> */}
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
                          id={habit.id}
                          title={habit.title}
                          time={habit.time}
                          isChecked={habit.checked}
                          isDisabled={habit.disabled}
                          onClick={this.handleHabitClick}
                        />
                      ))}
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
