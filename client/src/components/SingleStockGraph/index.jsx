import React, { Component } from 'react';
import Chart from 'chart.js';
import { loadDailyHistory } from './../../services/addhistory';

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
        labels: this.state.dailyLabels.slice(93),
        datasets: [
          {
            label: `${this.state.name}`,
            data: this.state.dailyPrices.slice(93),
            fill: false,
            backgroundColor: '#ff0000',
            borderColor: '#D46A6A'
          }
        ]
      },
      options: {}
    });
  }

  async updateData() {
    const data = await loadDailyHistory(this.state.name);
    const result = data[0].dailyClosingPrices;
    const dailyLabels = result.map((item, i) => item[0]).reverse();
    const dailyPrices = result.map((item, i) => item[1]).reverse();
    this.setState({ dailyLabels, dailyPrices });
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
