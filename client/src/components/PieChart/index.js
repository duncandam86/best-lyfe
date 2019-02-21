import React, { Component } from "react";
import "./style.scss";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';

class PieChart extends Component {

  componentDidMount() {
    console.log(this.props.habit);
  }

  render() {
    return (
        <div>
            <h4>Overall Progress:</h4>
              <div id="pie-chart-background">
              <Pie
                data={this.props.habit}
                options={{
                  legend:{
                    display:true,
                    labels:{fontColor:'#fff'}
                  },
                  label:{

                  }
              }}
              />
              </div>
        </div>
    
    );
  }
}

export default PieChart;
