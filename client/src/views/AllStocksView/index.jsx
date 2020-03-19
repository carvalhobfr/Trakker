import React, { Component } from 'react';
import TabBar from '../../components/TabBar';

export class AllStocksView extends Component {
  render() {
    return (
      <section className="page__allstocks">
        <h1>Trakker</h1>

        <TabBar />
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
