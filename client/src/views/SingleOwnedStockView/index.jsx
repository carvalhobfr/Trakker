import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation } from './../../services/addstocks';

class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownedStock: {},
      currentValue: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const name = this.props.match.params.name;
    console.log(this.props);
    console.log(name);
    loadStockInformation(name)
      .then(stock => {
        this.setState({ ownedStock: stock });
        console.log('LOADED', this.state.ownedStock);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="single-ownedStock-container">
          <div className="ownedStock-info-detail">
            <div className="headline-container">
              <h4>{this.state.ownedStock.name}</h4>
              {/* 
              <h4>{this.state.ownedStock.type}</h4>
            
    <p>{this.state.ownedStock.symbol}</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnedStock;
