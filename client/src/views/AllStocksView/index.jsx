import React, { Component } from 'react';
import TabBar from '../../components/TabBar';
import SearchWallet from '../../components/SearchWallet';
import SingleStockGeneral from '../../components/SingleStockGeneral';
import { loadAllDailyHistory } from '../../services/addhistory';

export class AllStocksView extends Component {
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
    const stocks = await loadAllDailyHistory();
    this.setState({ stocks });
  }

  render() {
    return (
      <section className="page__allstocks">
        <h1>Trakker</h1>

        <SearchWallet searchquery={this.state.searchquery} updateSearch={this.updateSearch} />
        {this.state.stocks
          .filter(search =>
            search.name.toLowerCase().includes(this.state.searchquery.toLowerCase())
          )
          .map(element => {
            return <SingleStockGeneral single={element} {...this.props} />;
          })}

        <TabBar {...this.props} />
      </section>
    );
  }
}

export default AllStocksView;

/* 
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TabBar from '../../components/TabBar';


class AllStocks extends Component {
  state = {
    stockList: []
  };

  componentDidMount() {
    axios.get('https://apiurl').then(response => {
      console.log(response.data);
      this.setState({
        stockList: response.data
      });
    });
  }

  render() {
    return (
      <div className="container">


        {this.state.stockList.map(stock => {
          return (
            <div>
              <div className="stock-item" key={stock._id}>
                <div>
                  <img className="stock-image" src={stock.image_url} alt="" />
                </div>
                <div className="stock-info">
                  <h4>{stock.name}</h4>
                  <h5>{stock.tagline}</h5>
                  <p>
                    <strong>Created by: </strong>
                    {stock.contributed_by}
                  </p>
                  <p>
                    <Link to={`/stocks/${stock._id}`}>Details</Link>
                    <TabBar />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllStocks;
 */
