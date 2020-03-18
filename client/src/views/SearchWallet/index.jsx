import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SearchWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      stockList: []
    };
    this.filterList = this.filterList.bind(this);
  }

  filterList = event => {
    let stockList = this.state.initialItems;
    stockList = stockList.filter(stock => {
      return stock.name.search(event.target.value) !== -1;
    });
    this.setState({ stockList: stockList });
  };

  componentDidMount = () => {
    axios.get('https://apiurl').then(response => {
      this.setState({
        initialItems: response.data,
        stockList: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {this.state.stockList.map(stock => {
            return (
              <div classname="stock-item" key={stock._name}>
                <div className="stock-info">
                  <h4>{stock.name}</h4>
                  <Link to={`/stocks/${stock._name}`}>Details</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchWallet;
