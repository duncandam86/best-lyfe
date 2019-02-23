import React, { Component } from "react";
import axios from "axios";
import "./style.scss";

class SevenDayChart extends Component {
  
  componentWillUpdate() {

    let splitArray = this.props.recordArray.split("");
    // console.log(splitArray)
    const reversed = splitArray.reverse();
    console.log(reversed)
    // console.log(reversed[0])
   
    document.querySelector('.day-1').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-2').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-3').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-4').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-5').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-6').style["background-color"] = "rgb(77, 77, 77)"
    document.querySelector('.day-7').style["background-color"] = "rgb(77, 77, 77)"
  //* Yesterday
    if (reversed[0] === '0'){
      document.querySelector('.day-1').style["background-color"] = "rgb(161, 72, 72)";
      }else if (reversed[0]==='1'){
        document.querySelector('.day-1').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 2
    if (reversed[1] === '0'){
      document.querySelector('.day-2').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[1]==='1'){
        document.querySelector('.day-2').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 3
    if (reversed[2] === '0'){
      document.querySelector('.day-3').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[2]==='1'){
        document.querySelector('.day-3').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 4
    if (reversed[3] === '0'){
      document.querySelector('.day-4').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[3]==='1'){
        document.querySelector('.day-4').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 5
    if (reversed[4] === '0'){
      document.querySelector('.day-5').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[4]==='1'){
        document.querySelector('.day-5').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 6
    if (reversed[5] === '0'){
      document.querySelector('.day-6').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[5]==='1'){
        document.querySelector('.day-6').style["background-color"] = "rgb(86,177,121)";
      }

    //* Day 7
    if (reversed[6] === '0'){
      document.querySelector('.day-7').style["background-color"] = "rgb(161, 72, 72)";
    }else if (reversed[6]==='1'){
        document.querySelector('.day-7').style["background-color"] = "rgb(86,177,121)";
      }

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

SevenDayChart.defaultProps = {
  recordArray: ""
};

export default SevenDayChart;
