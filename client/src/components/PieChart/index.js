import React, { Component } from "react";
import "./style.scss";
import { Bar, Line, Pie } from "react-chartjs-2";

class PieChart extends Component {
  constructor(props) {
    super(props);
  }

  //! Must remain for timing reasons, updates the component with the habit information passed from the habits page
  //! Sometimes the timing is off, talk to a TA about this
  componentWillUpdate() {
    // console.log(this.props.habit);
  }

  render() {
    let daysMissed = this.props.totalDays - this.props.daysMet;
    let daysMet = this.props.daysMet;
    const chartData = {
      labels: [daysMet + " Days Hit", daysMissed + " Days Missed"],
      datasets: [
        {
          label: "Days",
          data: [daysMet, daysMissed],
          backgroundColor: ["rgb(86,177,121)", "rgb(161, 72, 72)"]
        }
      ]
    };

    return (
      <div>
        <h4>Overall Progress:</h4>
        <div id="pie-chart-background">
          <Pie
            data={chartData}
            options={{
              legend: {
                display: true,
                labels: { fontColor: "#fff" }
              },
              labels: {
                fontColor: "#fff"
              },
              tooltips: {
                enabled: false
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default PieChart;
