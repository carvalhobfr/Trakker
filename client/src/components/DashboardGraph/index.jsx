import React, { Component } from 'react';
import Chart from 'chart.js';
//import classes from "./LineGraph.module.css";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphDaily: this.props.data
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
        data: this.state.graphDaily.data
        /* [
          {
            label: 'Balance',
            data: [54, 67, 91]
          }
        ] */
      },
      options: {
        //Customize chart options
      }
    });
    console.log(this.state);
  }

  updateData() {
    this.setState({ graphDaily: this.props.data });
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
