import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import companies from './../../services/assets';

class SearchWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [], //de onde vem isso?
      stockList: []
    };
    this.filterList = this.filterList.bind(this);
  }

  filterList = event => {
    let stockList = this.state.initialItems;
    stockList = stockList.filter(stock => {
      return stock.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ stockList: stockList });
  };

  componentDidMount = () => {
    console.log(this.props);
    /* this.setState({
      initialItems: this.props,
      stockList: this.props
    }); */
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
              <div classname="stock-item">
                {' '}
                {/* confirmar os values do stock */}
                <div className="stock-info">
                  <h4>{stock.name}</h4>
                  <Link to={`/stocks/${stock._id}`}>Details</Link>
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
