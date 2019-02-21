import React, { Component } from "react";
import { Link } from "react-router-dom";
//components
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import HabitListItem from "../../components/HabitList";
import LinkButton from "../../components/ButtonLink";
//other packages
import axios from "axios";
//styles
import "./style.scss";

class Routine extends Component {
  state = {
    completedHabits: [],
    remainingHabits: []
  };

  componentDidMount() {
    this.loadHabits();
  }

  loadHabits = () => {
    axios
      .get("/api/habits")
      .then(response => {
        //console.log(response.data);
        const allHabits = response.data;
        allHabits.forEach(habit => {
          let isUpdated = this.checkIfUpdated(habit.createdAt, habit.updatedAt);
          if (isUpdated) {
            habit.checked = true;
            habit.disabled = true;
          } else {
            habit.checked = false;
            habit.disabled = false;
          }
          return habit;
        });
        const completedHabits = allHabits.filter(
          habit => habit.checked === true
        );
        const remainingHabits = allHabits.filter(
          habit => habit.checked === false
        );
        //this.setState({ habits: allHabits });
        this.setState({
          completedHabits: completedHabits,
          remainingHabits: remainingHabits
        });
        //console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  checkIfUpdated = (createdDate, updatedDate) => {
    const todayDate = new Date().getDate();
    //const habitCreated = new Date(createdDate).getDate();
    const habitUpdated = new Date(updatedDate).getDate();
    if (createdDate === updatedDate) {
      return false;
    } else if (todayDate - habitUpdated === 0) {
      return true;
    } else {
      return false;
    }
  };

  handleHabitClick = event => {
    event.preventDefault();
    //console.log(event.target.id);
    const checkedHabit = this.state.remainingHabits.filter(
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
    let anyHabits = false;
    if (
      this.state.completedHabits.length > 0 ||
      this.state.remainingHabits.length > 0
    ) {
      anyHabits = true;
    }
    return (
      <>
        <Navbar />
        <div className="container">
          <BodyWrapper txtAlign="left" title1="Your" title2="Routine">
            <div className="columns is-centered">
              <div className="column is-four-fifths">
                {this.state.remainingHabits.length > 0 && (
                  <div id="habit-remain" className="is-size-3">
                    <h1>Habits Remaining Today</h1>
                    <hr className="routine-hr" />
                    <div id="habit-list">
                      {this.state.remainingHabits.map(habit => (
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
                )}
                {this.state.completedHabits.length > 0 && (
                  <div id="habit-complete" className="is-size-3">
                    Habits Completed
                    <hr className="routine-hr" />
                    <div id="habit-list">
                      {this.state.completedHabits.map(habit => (
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
                )}
                {anyHabits && (
                  <div id="add-habit" className="level">
                    <div className="level-item has-text-centered">
                      <LinkButton page="/habitsform" name="Add New Habit" />
                    </div>
                  </div>
                )}
                {!anyHabits && (
                  <div className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="title is-3">No Habits</p>
                        <p>
                          <Link to="/habitsform" className="is-link is-size-5">
                            Click here to create a new habit.
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
