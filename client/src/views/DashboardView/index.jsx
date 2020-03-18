import React, { Component } from 'react';
import { loadAllStockInformation } from './../../services/addstocks';
import TabBar from '../../components/TabBar';
import SingleStock from '../../components/SingleStock';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.wallet,
      stocks: [],
      totalQuantity: 0,
      totalBalance: 0
    };
  }

  async componentDidMount() {
    await this.fetchData();
    this.getTotals();
  }

  async fetchData() {
    const stocks = await loadAllStockInformation(this.props.wallet);
    this.setState({ stocks });
  }

  async getTotals() {
    const totalQuantity = this.state.stocks.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0);
    const totalBalance = this.state.stocks.reduce((acc, value) => {
      return acc + value.buying_price;
    }, 0);

    await this.setState({ totalQuantity, totalBalance });
  }

  render() {
    return (
      <section className="page__dashboard">
        <h2>Trakker</h2>
        <h4>Good afternoon</h4>
        <h6>Here's the summary of your account</h6>
        <h6>Your current number of stocks: {this.state.totalQuantity}</h6>
        <h6>The current value of your stocks: {this.state.totalBalance}</h6>
        <TabBar />
      </section>
    );
  }
}

export default DashboardView;
