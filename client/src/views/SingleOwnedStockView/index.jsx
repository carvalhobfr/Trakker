import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation } from './../../services/addstocks';

class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.location.state.wallet,
      name: this.props.location.state.name,
      ownedStock: [],
      currentValue: {}
    };
  }

  async componentDidMount() {
    //console.log(this.props.location);
    await this.fetchData();
    console.log(this.state);
    console.log(this.props.location.state);
    //console.log('SEARCH INPUTS', searchInputs);
    //console.log(this.state.ownedStock);
  }

  async fetchData() {
    const ownedStock = await loadStockInformation(this.state.wallet, this.state.name);
    this.setState({ ownedStock: ownedStock });
    //const currentValue = await requestDaily(name);
    //this.setState({ currentValue });
  }

  render() {
    return (
      <div className="container">
        <div className="single-ownedStock-container">
          <div className="ownedStock-info-detail">
            <div className="headline-container">
              {this.state.ownedStock.map(element => {
                return (
                  <div>
                    <p>{element.name}</p>
                    <p>{element.buying_price}</p>
                    <p>{element.quantity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnedStock;
