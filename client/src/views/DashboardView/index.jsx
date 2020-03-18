import React, { Component } from 'react';
import { loadAllStockInformation } from './../../services/addstocks';
import TabBar from '../../components/TabBar';
import SingleStock from '../../components/SingleStock';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.wallet,
      stocks: []
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const stocks = await loadAllStockInformation(this.props.wallet);
    this.setState({ stocks });
  }

  render() {
    return (
      <section className="page__dashboard">
        <h2>Trakker</h2>
        <h4>Good afternoon</h4>
        <h6>Here's the summary of your account</h6>
        <h6>Wallet id: {this.state.wallet}</h6>
        {this.state.stocks.map(element => {
          return <SingleStock single={element} {...this.props} />;
        })}
        <TabBar />
      </section>
    );
  }
}

export default DashboardView;
