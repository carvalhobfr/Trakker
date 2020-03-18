import React, { Component } from 'react';
import { loadAllStockInformation, loadWalletInformation } from './../../services/addstocks';
import TabBar from '../../components/TabBar';
import LineGraph from '../../components/DashboardGraph';
import SingleStock from '../../components/SingleStock';
import './style.scss';

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
    console.log(this.state.wallet);
  }

  async fetchData() {
    const stocks = await loadAllStockInformation(this.props.wallet);
    this.setState({ stocks });
    const wallet = await loadWalletInformation(this.props.wallet);
    this.setState({
      totalQuantity: wallet.number_of_stocks,
      totalBalance: wallet.starting_balance
    });
  }

  render() {
    return (
      <section className="page__dashboard">
        <h1>Trakker</h1>
        <h4>Good afternoon</h4>
        <h4>Summary</h4>
        <LineGraph />

        <h4>Your current number of stocks: {this.state.totalQuantity}</h4>
        <h4>The current value of your stocks: {this.state.totalBalance}</h4>

        <form action="/add-stock">
          <button className="button__add-stock">Add Stock</button>
        </form>
        <TabBar />
      </section>
    );
  }
}

export default DashboardView;
