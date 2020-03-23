import React, { Component } from 'react';
import Chart from 'chart.js';
import { loadDailyInfo, loadSingleInfo } from './../../services/graphdata';
import { loadUniqueStockInformation } from './../../services/addstocks';
//import classes from "./LineGraph.module.css";

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

  async componentDidMount() {
    this.buildchart();
    console.log('GRAPH DATA', this.props);
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

  buildchart() {
    const myChartRef = this.chartRef.current.getContext('2d');

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
    });
  }

  componentDidUpdate() {
    console.log('UPDATED GRAPH', this.props);
    this.buildchart();
  }
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
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default DashboardGraph;
