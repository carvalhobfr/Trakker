import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import ProtectedRoute from './../ProtectedRoute';
import './style.scss';

class SingleStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.single.wallet,
      name: this.props.single.name
    };
  }

  render() {
    let totalPrice = this.props.single.price * this.props.single.quantity;
    return (
      <Link
        to={{
          pathname: '/singlestock',
          state: {
            wallet: this.state.wallet,
            name: this.state.name
          }
        }}
      >
        <section className="stock__single-button">
          <h4>{this.props.single.name}</h4>
          <p>{this.props.single.price} USD</p>
          <p>{this.props.single.quantity}</p>
          <p>{totalPrice.toFixed(2)} USD</p>
        </section>
      </Link>
    );
  }
}

export default SingleStock;
