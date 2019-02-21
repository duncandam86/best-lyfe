import React, { Component } from "react";
import axios from "axios";
import "./style.scss";

class SevenDayChart extends Component {
  
  componentWillUpdate() {
    // console.log(this.props);
    console.log(this.props.habit);
    // console.log(this.props.habit.recordArray);

  }

  render() {
  //* Push the track record into an array   
    // let lastSevenDays = [];
    // lastSevenDays.push(this.props.habit.recordArray);
    // console.log("lastSevenDays Array " + lastSevenDays)
    // let cheese = "cheese"
    // let newValue = cheese.split("e");
    // console.log(newValue)
    let strings = this.props.habit.recordArray.split("0")
    console.log(strings)


    //* Take the array of string values and convert to integers
    // const mapped = lastSevenDays.map(x => parseInt(x));
    // console.log("mapped Array " + mapped)
    // parseInt(lastSevenDays)
    // console.log(lastSevenDays)
    // recordArray.slice(Math.max(arr.length - 7, 1))

    return (
       <>
       <h4>Last Seven Days:</h4>
        <div id="SevenDaysContainer">
          <div className="columns column-days">
              <div className="column">Y</div>
              <div className="column">2</div>
              <div className="column">3</div>
              <div className="column">4</div>
              <div className="column">5</div>
              <div className="column">6</div>
              <div className="column">7</div>
          </div>

          <div className="columns column-info">
              <div className="column day-1"></div>
              <div className="column day-2"></div>
              <div className="column day-3"></div>
              <div className="column day-4"></div>
              <div className="column day-5"></div>
              <div className="column day-6"></div>
              <div className="column day-7"></div>
          </div>
        </div>
       </>
    );
  }
}

export default SevenDayChart;
