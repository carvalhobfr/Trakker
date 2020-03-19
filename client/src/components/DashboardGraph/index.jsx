import React, { Component } from 'react';
import Chart from 'chart.js';
import { loadDailyInfo } from './../../services/graphdata';
//import classes from "./LineGraph.module.css";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphDaily: {}
    };
  }
  chartRef = React.createRef();

  async componentDidMount() {
    await this.updateData();
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: this.state.graphDaily.labels, //['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Amount invested',
            data: [...this.state.graphDaily.data].join(',')
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
    console.log(this.state.graphDaily);
  }

  async updateData() {
    const graphDaily = await loadDailyInfo();
    this.setState({ graphDaily });
    console.log(this.state.graphDaily);
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default LineGraph;
