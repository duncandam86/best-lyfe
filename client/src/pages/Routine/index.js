import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//components
// import LargeLogo from "../../components/LargeLogo";
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
        this.setState({ habits: response.data });
      })
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  isChecked = function check() {
    document.getElementsByTagName("input");
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.savehabit({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadhabits())
    //     .catch(err => console.log(err));
    // }
  };

  render() {
    this.state.habits.forEach(habit => {
      console.log(habit.id);
    });
    //<DeleteBtn onClick={() => this.deletehabit(habit._id)} />
    return (
      <>
        <Navbar />
        <div className="container">
          <BodyWrapper txtAlign="left" title1="Your" title2="Routine">
            <div className="columns is-centered">
              <div className="column is-four-fifths">
                {this.state.habits.length ? (
                  <div id="habit-list">
                    {this.state.habits.map(habit => (
                      <HabitListItem
                        key={habit.id}
                        dataId={habit.id}
                        title={habit.title}
                        time={habit.time}
                        onChange={this.handleBoxChange}
                      />
                    ))}
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
