import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation } from './../../services/addstocks';
// import { Stock, getPrice } from './../../components/Stock/Stock';

class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.location.state.wallet,
      name: this.props.location.state.name,
      ownedStock: [],
      totalQuantity: 0,
      totalPrice: 0,
      currentValue: 0
    };
  }

  async componentDidMount() {
    await this.fetchData();
    this.getTotals();
    // console.log("this.state", this.state)
    // console.log("Total Price", this.state.totalPrice)
    // console.log("Total Price", this.state.totalQuantity)
  }

  async fetchData() {
    const ownedStock = await loadStockInformation(this.state.wallet, this.state.name);
    const currentValue = await requestDaily(this.state.name);
    this.setState({ ownedStock, currentValue });
    console.log('aloaoaoa', this.state.currentValue);
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
        <p>AvgPrice: {(this.state.totalPrice / this.state.totalQuantity).toFixed(2)}$</p>
        <hr />

        {this.state.ownedStock.map(stock => {
          return (
            <p>
              Data of Purchase: {stock.date_of_purchase}
              <br />
              Quantity: {stock.quantity}
              <br />
              BuyingPrice: {stock.buying_price} <br />
              current value : {Number(this.state.currentValue).toFixed(2)}
              <hr />
            </p>
          );
        })}
      </div>
    );
  }
}

export default OwnedStock;
