import React, { Component } from 'react';
import {
  loadUniqueStockInformation,
  loadWalletInformation,
  loadAllStockInformation
} from './../../services/addstocks';
import { loadDailyInfo, loadSingleInfo } from './../../services/graphdata';
import TabBar from '../../components/TabBar';
import DashboardGraph from '../../components/DashboardGraph';

import './style.scss';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.wallet,
      uniqueStocks: [],
      stocks: [],
      totalQuantity: 0,
      totalBalance: 0,
      graphQuantity: [],
      graphPrices: [],
      graphLabels: []
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const uniqueStocks = await loadUniqueStockInformation(this.props.wallet);
    const stocks = await loadAllStockInformation(this.props.wallet);
    this.setState({ uniqueStocks, stocks });
    const wallet = await loadWalletInformation(this.props.wallet);
    //const graphDaily = await loadDailyInfo();
    const totalQuantity = wallet.number_of_stocks;
    const totalBalance = wallet.starting_balance - wallet.sold_balance;
    this.setState({
      totalQuantity,
      totalBalance
    });
  }

  /* async graphInfo() {
    const graphQuantity = [];
    const graphPrices = [];
    const graphLabels = [];
    this.state.uniqueStocks.map(async element => {
      const info = await loadSingleInfo(element.name);
      console.log('INFO NAME', info.name);
      graphLabels.push(info.name);
      graphQuantity.push(info.totalQuantity);
      graphPrices.push(info.totalPrice);
    });

    this.setState({ graphQuantity, graphPrices, graphLabels });
  } */

  render() {
    return (
      <section className="page__dashboard">
        <img src="/img01.png" alt="logo" />
        <h4>Good afternoon, {this.props.user.name}!</h4>
        <h4>Here's the summary of your account:</h4>
        <h4>
          <strong>{this.state.totalBalance}USD</strong>
        </h4>
        <DashboardGraph wallet={this.props.wallet} />

        <h4>Number of companies you've invested in: {this.state.uniqueStocks.length}</h4>

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
