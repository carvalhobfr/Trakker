import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadDailyHistory } from './../../services/addhistory';
import { loadStockInformation } from './../../services/addstocks';
import './style.scss';

class SingleStockGeneral extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <h4>{this.props.single.name.toUpperCase}</h4>
        </div>
        <div
          className={this.props.margin < 0 ? 'stock__change-negative' : 'stock__change-positive'}
        >
          <p>{this.props.margin.toFixed(2)} % </p>
        </div>
        <hr />
      </section>
      // </Link>
    );
  }
}

export default SingleStockGeneral;
