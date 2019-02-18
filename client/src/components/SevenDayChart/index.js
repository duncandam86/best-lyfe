import React, { Component } from "react";
import "./style.scss";
import {Bar, Line, Pie} from 'react-chartjs-2';


class SevenDayChart extends Component {
  state = {
    habitArray: [],
    selectedHabit: {},
    dropDownTitle: "Select a Habit",
    chartData:{
      labels:['Days met', 'Days missed'],
      datasets:[
        {
          label:'Population',
          data:[
            617594,
            181045,
           
          ],
          backgroundColor:[
            'rgba(86,177,121)',
            'rgba(144,143,143)'
          ]
        }]
    }
  }; 
  render() {
    return (
       <>
       <h4>Last 7 Days:</h4>
              <div id="pie-chart-background">
       <Bar
                data={this.state.chartData}
                options={{
                  legend:{
                    display:true,
                    labels:{fontColor:'#fff'}
                  }
              }}
              />
              </div>
       </>
    );
  }
}

export default SevenDayChart;
