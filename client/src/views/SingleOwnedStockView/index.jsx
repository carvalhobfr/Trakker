import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation } from './../../services/addstocks';
import './style.scss';

class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.location.state.wallet,
      name: this.props.location.state.name,
      ownedStock: [],
      totalQuantity: 0,
      totalPrice: 0,
      currentValue: 0,
      profit: 0
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
      <section className="page__single-stock">
        <h4>{this.state.name}</h4>
        <p>Stock quantity: {this.state.totalQuantity}</p>
        <p>Total investment: {this.state.totalPrice}$</p>
        <p>Average Price: {(this.state.totalPrice / this.state.totalQuantity).toFixed(2)}$</p>
        <p>
          Gross Profit:{' '}
          {(this.state.currentValue * this.state.totalQuantity - this.state.totalPrice).toFixed(2)}${' '}
        </p>

        {this.state.ownedStock.map(stock => {
          let profit_margin = (
            ((Number(this.state.currentValue).toFixed(2) - stock.buying_price) /
              stock.buying_price) *
            100
          ).toFixed(2);
          return (
            <section className="stock__purchases">
              <hr />
              <p> Date of Purchase: {new Date(stock.date_of_purchase).toDateString()}</p>
              <p> Quantity: {stock.quantity}</p>
              <p> Bought for: {stock.buying_price} $</p>
              <p>
                Current value :
                <span
                  className={
                    stock.buying_price < this.state.currentValue
                      ? 'price__increase'
                      : 'price__decrease'
                  }
                >
                  {Number(this.state.currentValue).toFixed(2)}
                </span>
              </p>
              <p>
                {' '}
                Profit margin:{' '}
                <span className={profit_margin > 0 ? 'price__increase' : 'price__decrease'}>
                  {profit_margin} %{' '}
                </span>
              </p>
              <hr />
            </section>
          );
        })}
      </section>
    );
  }
}

export default OwnedStock;
