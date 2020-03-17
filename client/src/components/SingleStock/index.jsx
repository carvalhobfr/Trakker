import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import ProtectedRoute from './../ProtectedRoute';
import './style.scss';
import { loadStockInformation } from '../../services/addstocks';

class SingleStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: this.props.single.wallet,
      name: this.props.single.name
    };
  }

  componentDidMount() {
    console.log('THIS ONE', this.props);
  }

  render() {
    return (
      /* <div>
        <h4>Test</h4>
      </div> */
      /* <a href={`singlestock/${props.props.wallet}/${props.props.name}`}> */
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
          {' '}
          <h4>{this.props.single.name}</h4>
          <p>{this.props.single.buying_price}$</p>
          <p>{this.props.single.quantity}</p>
        </section>
      </Link>
    );
  }
}

export default SingleStock;
/* `singlestock/${props.props.wallet}/${props.props.name}` */
