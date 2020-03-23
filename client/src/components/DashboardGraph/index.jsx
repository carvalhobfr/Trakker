import React, { Component } from 'react';
import Chart from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { loadDailyInfo, loadSingleInfo } from './../../services/graphdata';
import { loadUniqueStockInformation } from './../../services/addstocks';

class DashboardGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    // this.buildchart = this.buildchart.bind(this);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    // this.buildchart();
    console.log('GRAPH DATA', this.props);
    const { graphLabels, graphPrices } = this.props.data;
    const data = [
      {
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
      }
    ];

    this.setState({ data });

    //await this.graphInfo();
    /* const myChartRef = await this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: this.props.data.graphLabels,
        datasets: [
          {
            label: 'Current investments',
            data: this.props.data.graphPrices,
            fill: false,
            backgroundColor: '#59c078',
            borderColor: '#D46A6A'
          }
        ]
      },

      options: {}
    }); */
  }

  /*  buildchart() {
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
  } */

  /*  componentDidUpdate() {
    console.log('UPDATED GRAPH', this.props);
    this.buildchart();
  } */
  /* async graphInfo() {
    const uniqueStocks = await loadUniqueStockInformation(this.props.wallet);
    const graphQuantity = [];
    const graphPrices = [];
    const graphLabels = [];
    await uniqueStocks.map(async element => {
      const info = await loadSingleInfo(element.name);
      graphLabels.push(info.name);
      graphQuantity.push(info.totalQuantity);
      graphPrices.push(info.totalPrice);
    });

    this.setState({ uniqueStocks, graphQuantity, graphPrices, graphLabels });
  }
 */
  render() {
    return (
      <div>
        <Pie data={this.state.data} width={100} height={50} />
        {/* <canvas id="myChart" ref={this.chartRef} /> */}
      </div>
    );
  }
}

export default DashboardGraph;
