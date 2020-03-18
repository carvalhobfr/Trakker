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
      totalQuantity: 0,
      totalPrice: 0,
      currentValue: {}
    };
  }

  async componentDidMount() {
    await this.fetchData();
    this.getTotals();
  }

  async fetchData() {
    const ownedStock = await loadStockInformation(this.state.wallet, this.state.name);
    const currentValue = await requestDaily(this.state.name);
    this.setState({ ownedStock, currentValue });
  }

  async getTotals() {
    const totalQuantity = this.state.ownedStock.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0);
    const totalPrice = this.state.ownedStock.reduce((acc, value) => {
      return acc + value.buying_price;
    }, 0);

    await this.setState({ totalQuantity, totalPrice });
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.name}</h4>
        <p>Quantity: {this.state.totalQuantity}</p>
        <p>Price: {this.state.totalPrice}$</p>
      </div>
    );
  }
}

export default OwnedStock;
