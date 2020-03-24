import React, { Component } from 'react';
import { loadStockInformation } from './../../services/addstocks';
import { loadDailyHistory } from './../../services/addhistory';
import SingleStockGraph from './../../components/SingleStockGraph';
import './style.scss';
import TabBar from '../../components/TabBar';



class OwnedStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.user.wallet,
      name: this.props.match.params.name,
      dailyData: [],
      ownedStock: [],
      totalQuantity: 0,
      totalPrice: 0,
      currentValue: 0,
      profit: 0,
      buttonVisibility: false,
      deleteStocks: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
    this.getTotals();
  }

  async fetchData() {
    const dailyData = await loadDailyHistory(this.state.name);
    const ownedStock = await loadStockInformation(this.state.wallet, this.state.name);
    const currentValue = dailyData[0].dailyClosingPrices[0][1];
    this.setState({ ownedStock, currentValue, dailyData });
  }

  async getTotals() {
    const totalQuantity = this.state.ownedStock.reduce((acc, value, i) => {
      return this.state.ownedStock[i].transaction == 'bought'
        ? acc + value.quantity
        : acc - value.quantity;
    }, 0);
    const totalPrice = this.state.ownedStock.reduce((acc, value, i) => {
      return this.state.ownedStock[i].transaction == 'bought'
        ? acc + value.price * value.quantity
        : acc - value.price * value.quantity;
    }, 0);

    await this.setState({ totalQuantity, totalPrice });
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
        <SingleStockGraph name={this.state.name} />
        <p>Current Value : {this.state.currentValue}</p>

        {this.state.ownedStock.map(stock => {
          let sectionBought = (
            <section className="stock__purchases">
              <hr />
              <p> Date of Purchase: {new Date(stock.date).toDateString()}</p>
              <p> Quantity: {stock.quantity}</p>
              <p> Bought for: {stock.price} USD</p>
              <p>
                Current value : {}
                <span
                  className={
                    stock.price < this.state.currentValue ? 'price__increase' : 'price__decrease'
                  }
                >
                  {Number(this.state.currentValue).toFixed(2)}
                </span>
              </p>
              <hr />
            </section>
          );
          let sectionSold = (
            <section className="stock__sold">
              <hr />
              <p> Date of Sale: {new Date(stock.date).toDateString()}</p>
              <p> Quantity: {stock.quantity}</p>
              <p> Sold for: {stock.price} USD</p>
              <p>
                Current value : {}
                <span
                  className={
                    stock.price < this.state.currentValue ? 'price__increase' : 'price__decrease'
                  }
                >
                  {Number(this.state.currentValue).toFixed(2)}
                </span>
              </p>
              <hr />
            </section>
          );

          if (stock.transaction === 'bought') {
            return sectionBought;
          } else {
            return sectionSold;
          }
        })}
        <TabBar {...this.props} />
      </section>
    );
  }
}

export default OwnedStock;
