import React, { Component } from 'react';
import { loadAllStockInformation, loadWalletInformation } from './../../services/addstocks';
import { loadDailyInfo } from './../../services/graphdata';
import TabBar from '../../components/TabBar';
import LineGraph from '../../components/DashboardGraph';

import './style.scss';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.wallet,
      stocks: [],
      totalQuantity: 0,
      totalBalance: 0,
      graphDaily: {}
    };
  }

  async componentDidMount() {
    await this.fetchData();
    this.setState({ graphDaily: this.state.graphDaily });
  }

  async fetchData() {
    const stocks = await loadAllStockInformation(this.props.wallet);
    this.setState({ stocks });
    const wallet = await loadWalletInformation(this.props.wallet);
    const totalQuantity = wallet.number_of_stocks;
    const graphDaily = await loadDailyInfo();
    this.setState({
      totalQuantity,
      // totalBalance,
      graphDaily
    });
  }

  render() {
    return (
      <section className="page__dashboard">
        <h1>Trakker</h1>
        <h4>Good afternoon</h4>
        <h4>Here's the summary of your account:</h4>
        <h4>
          <strong>{this.state.totalQuantity} USD</strong>
        </h4>
        <LineGraph data={this.state.graphDaily} />

        {/* <h4>Your current number of stocks: {this.state.stocks.length}</h4> */}

        <form action="/add-stock">
          <button className="button__add-stock">Add to Wallet</button>
        </form>
        <form action="/remove-stock">
          <button className="button__remove-stock">Remove from Wallet</button>
        </form>
        <TabBar {...this.props} />
      </section>
    );
  }
}

export default DashboardView;
