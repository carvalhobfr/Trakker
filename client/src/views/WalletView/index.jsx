import React, { Component } from 'react';
import { loadUniqueStockInformation } from './../../services/addstocks';
import { loadDailyHistory } from './../../services/addhistory';
import TabBar from '../../components/TabBar';
import SingleStock from '../../components/SingleStock';
import SearchWallet from '../../components/SearchWallet';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchquery: '',
      wallet: this.props.user.wallet,
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
    const stocks = await loadUniqueStockInformation(this.state.wallet);
    this.setState({ stocks });
  }

  render() {
    return (
      <section className="page__wallet">
        <h2>Trakker</h2>
        <h4>Your current positions:</h4>

        <SearchWallet searchquery={this.state.searchquery} updateSearch={this.updateSearch} />
        {this.state.stocks
          .filter(search =>
            search.name.toLowerCase().includes(this.state.searchquery.toLowerCase())
          )
          .map(element => {
            //console.log('ELEMENT', element);
            /*  const history = loadDailyHistory(element.name);
            console.log(history);
            const currentPrice = history.dailyClosingPrices[0][1];
            const oldPrice = history.dailyClosingPrices[1][1];
            const changeMargin = ((currentPrice - oldPrice) / oldPrice) * 100; */
            return <SingleStock single={element} /* margin={changeMargin}  */ {...this.props} />;
          })}
        <TabBar {...this.props} />
      </section>
    );
  }
}

export default Wallet;
