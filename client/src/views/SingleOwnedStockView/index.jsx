import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation } from './../../services/addstocks';

class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.wallet,
      ownedStock: {},
      currentValue: {}
    };
  }

  async componentDidMount() {
    await this.fetchData();
    console.log(this.state.ownedStock);
  }

  async fetchData() {
    const currentValue = await requestDaily('TSLA');
    this.setState({ currentValue });
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
