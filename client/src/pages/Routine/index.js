import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//components
// import LargeLogo from "../../components/LargeLogo";
import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";
import { List, ListItem } from "../../components/List";

//other packages
import axios from "axios";
//styles
import "./style.scss";

class Routine extends Component {
  state = {
    habits: [],
    habitChecked: false
  };

  componentDidMount() {
    this.loadHabits();
  }

  loadHabits = () => {
    axios
      .get("/api/users")
      .then(response => {
        this.setState({ habits: response.data });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
    return this.state.redirect ? (
      <Redirect to="/routine" />
    ) : (
      <div className="container is-fluid">
        <div className="columns is-mobile is-centered">
          <div className="column is-10">
            <div className="level is-marginless">
              <div className="level-item">
                <Navbar />
              </div>
            </div>
            <BodyWrapper txtAlign="left" title1="Your" title2="Routine">
              {this.state.habits.length ? (
                <List>
                  {this.state.habits.map(habit => (
                    <ListItem key={habit.id}>
                      <Link to={"/habits/" + habit._id}>
                        <strong>
                          {habit.title} by {habit.author}
                        </strong>
                      </Link>
                      {/* <DeleteBtn onClick={() => this.deletehabit(habit._id)} /> */}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3 is-size-3>No Results to Display</h3>
              )}
            </BodyWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default Routine;
