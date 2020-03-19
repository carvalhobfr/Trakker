import React, { Component } from 'react';
import { requestDaily } from './../../services/getapidata';
import { loadStockInformation, removeStock } from './../../services/addstocks';
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
      profit: 0,
      buttonVisibility: false,
      deleteStocks: ''
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
    this.getTotals();
  }

  async fetchData() {
    const ownedStock = await loadStockInformation(this.state.wallet, this.state.name);
    const currentValue = await requestDaily(this.state.name);
    this.setState({ ownedStock, currentValue });
    console.log('aloaoaoa', this.state.ownedStock);
  }

  async getTotals() {
    const totalQuantity = this.state.ownedStock.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0);
    const totalPrice = this.state.ownedStock.reduce((acc, value) => {
      return acc + value.price;
    }, 0);

    await this.setState({ totalQuantity, totalPrice });
  }

  toggleButton() {
    this.setState({ buttonVisibility: !this.state.buttonVisibility });
  }

  async deleteSubmission(event) {
    event.preventDefault();
    const { deleteStocks, wallet, name } = this.state;
    await removeStock(deleteStocks, wallet, name);
    this.setState({ deleteStocks: '' });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  //NEED TO RECALCULATE THE AVG AND PROFIT FUNCTIONS
  render() {
    return (
      <section className="page__single-stock">
        <h4>{this.state.name}</h4>
        <p>Stock quantity: {this.state.totalQuantity}</p>
        <p>Total investment: {this.state.totalPrice} USD</p>
        <button onClick={this.toggleButton}>Remove Stocks</button>
        {this.state.buttonVisibility && (
          <form onSubmit={this.deleteSubmission}>
            <input
              type="number"
              name="deleteStocks"
              max={this.state.totalQuantity}
              placeholder="How many to remove?"
              value={this.state.deleteStocks}
              onChange={this.handleInputChange}
            ></input>
            <button>Confirm</button>
          </form>
        )}

        {/* <p>Average Price: {(this.state.totalPrice / this.state.totalQuantity).toFixed(2)} USD</p>*/}
        {/*  <p>
          Gross Profit:{' '}
          {(this.state.currentValue * this.state.totalQuantity - this.state.totalPrice).toFixed(2)}{' '}
          USD{' '}
        </p> */}

        {this.state.ownedStock.map(stock => {
          let profit_margin = (
            ((Number(this.state.currentValue).toFixed(2) - stock.price) / stock.price) *
            100
          ).toFixed(2);
          return (
            <section className="stock__purchases">
              <hr />
              <p> Date of Purchase: {new Date(stock.date).toDateString()}</p>
              <p> Quantity: {stock.quantity}</p>
              <p> Bought for: {stock.price} USD</p>
              <p>
                Current value :
                <span
                  className={
                    stock.price < this.state.currentValue ? 'price__increase' : 'price__decrease'
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
