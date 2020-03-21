import React, { Component } from 'react';
import Chart from 'chart.js';
import { loadDailyHistory } from './../../services/addhistory';
//import classes from "./LineGraph.module.css";

class SingleStockGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: this.props.data,
      dailyLabels: [],
      dailyPrices: []
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
        labels: this.state.dailyLabels, //['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: `${this.state.name}`,
            data: this.state.dailyPrices,
            fill: false
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
    //console.log(this.state.graphDaily);
  }

  async updateData() {
    const data = await loadDailyHistory(this.state.name);
    const result = data[0].dailyClosingPrices;
    //console.log('DATA', data);
    console.log('RESULT', result);
    const dailyLabels = result.map((item, i) => item[0][0]);
    const dailyPrices = result.map((item, i) => item[1][1]);
    this.setState({ dailyLabels, dailyPrices });
    console.log('GRAPH PROPS', this.props);
    console.log('GRAPH DATA', this.state.data);
    /* const graphDaily = await loadDailyHistory(this.state.name);
    this.setState({ graphDaily });
    console.log(this.state.graphDaily); */
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default SingleStockGraph;
