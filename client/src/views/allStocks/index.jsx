import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TabBar from '../../components/TabBar';
// import MyFilteringComponent from "./search";

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
        {/* <MyFilteringComponent content={this.stockList} /> */}

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
