import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadDailyHistory } from './../../services/addhistory';
import { loadStockInformation } from './../../services/addstocks';
import './style.scss';

class SingleStockGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.single.name,
      changeMargin: 0
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const dailyData = await loadDailyHistory(this.props.single.name);
    const currentPrice = dailyData[0].dailyClosingPrices[0][1];
    const oldPrice = dailyData[0].dailyClosingPrices[1][1];
    const changeMargin = ((currentPrice - oldPrice) / oldPrice) * 100;
    this.setState({ changeMargin });
  }

  render() {
    //let totalPrice = this.props.single.price * this.props.single.quantity;
    return (
      /*  <Link
        to={{
          pathname: `/singlestock/${this.state.name}`,
          state: {
            wallet: this.state.wallet,
            name: this.state.name
          }
        }}
        params={this.state.name}
      > */
      <section className="stock__single-button">
        <div className="stock__symbol">
          <h4>{this.props.single.name}</h4>
        </div>
        <div
          className={
            this.state.changeMargin < 0 ? 'stock__change-negative' : 'stock__change-positive'
          }
        >
          <p>{this.state.changeMargin.toFixed(2)} % </p>
        </div>
        {/* <div className="stock__total-price">
            <p>Amount invested: {this.state.totalPrice.toFixed(2)} USD</p>
          </div> */}
        <hr />
      </section>
      // </Link>
    );
  }
}

export default SingleStockGeneral;
