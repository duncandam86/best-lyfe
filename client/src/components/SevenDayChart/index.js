import React, { Component } from "react";
import "./style.scss";

class SevenDayChart extends Component {
  state = {
    habitArray: [],
  }; 

componentDidMount(){
  let data = [0,0,0,0,0,0,0,1,1,1,1,1,1,1];

  let SevenDays = function(){
    let lastSevenArray = data.slice(Math.max(data.length - 7, 1));
    console.log(lastSevenArray);
    // map to get the index of the array
  
  }
  
  SevenDays();
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
