import React, { Component } from 'react';
import Chart from 'chart.js';

class DashboardGraph extends Component {
  constructor(props) {
    super(props);
    this.buildchart = this.buildchart.bind(this);
    this.chartRef = React.createRef();
    this.myChart = null;
  }

  componentDidMount() {
    this.buildchart();
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => this.buildchart(), 600);
    // this.buildchart();
  }

  buildchart() {
    if (this.myChart) this.myChart.destroy();

    const context = this.chartRef.current.getContext('2d');
    const { graphLabels, graphPrices } = this.props.data;

    this.myChart = new Chart(context, {
      type: 'pie',
      data: {
        labels: graphLabels,
        datasets: [
          {
            label: 'Current investments',
            data: graphPrices,
            fill: false,
            backgroundColor: '#59c078',
            borderColor: '#A0E871'
          }
        ]
      },

      options: {}
    });
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
