import React, { Component } from 'react';
import Chart from 'chart.js';
let myChart;

class DashboardGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueStocks: [],
      graphQuantity: [],
      graphPrices: [],
      graphLabels: []
    };
    this.buildchart = this.buildchart.bind(this);
  }
  chartRef = React.createRef();

  componentDidMount() {
    this.buildchart();
  }

  buildchart() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { graphLabels, graphPrices } = this.props.data;
    if (typeof myChart !== 'undefined') myChart.destroy();

    myChart = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: graphLabels,
        datasets: [
          {
            label: 'Current investments',
            data: graphPrices,
            fill: false,
            backgroundColor: '#59c078',
            borderColor: '#D46A6A'
          }
        ]
      },

      options: {}
    });
  }

  componentDidUpdate() {
    this.buildchart();
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default DashboardGraph;
