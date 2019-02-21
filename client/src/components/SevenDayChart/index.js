import React, { Component } from "react";
import axios from "axios";
import "./style.scss";

class SevenDayChart extends Component {
  
  componentDidMount() {
    console.log(this.props.habit);
    
  }

  render() {
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
