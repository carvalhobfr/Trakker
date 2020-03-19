import React, { Component } from 'react';
import { loadAllStockInformation } from './../../services/addstocks';
import TabBar from '../../components/TabBar';
import SingleStock from '../../components/SingleStock';
import SearchWallet from '../../components/SearchWallet';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchquery: '',
      wallet: this.props.wallet,
      stocks: []
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(searchquery) {
    this.setState({ searchquery });
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
      <section className="page__wallet">
        <h2>Trakker</h2>
        <h4>Your current positions:</h4>

        <h6>Wallet id: {this.state.wallet}</h6>
        <SearchWallet searchquery={this.state.searchquery} updateSearch={this.updateSearch} />
        {this.state.stocks
          .filter(search =>
            search.name.toLowerCase().includes(this.state.searchquery.toLowerCase())
          )
          .map(element => {
            return <SingleStock single={element} {...this.props} />;
          })}
        <TabBar />
      </section>
    );
  }
}

export default Wallet;
