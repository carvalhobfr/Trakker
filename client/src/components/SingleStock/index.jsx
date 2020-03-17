import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { loadStockInformation } from '../../services/addstocks';

class SingleStock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      /* <a href={`singlestock/${props.props.wallet}/${props.props.name}`}> */
      <Link to={`singlestock/${props.props.wallet}/${props.props.name}`}>
        <section className="stock__single-button">
          {' '}
          <h4>{props.props.name}</h4>
          <p>{props.props.buying_price}$</p>
          <p>{props.props.quantity}</p>
        </section>
      </Link>
    );
  }
}

export default SingleStock;
/* `singlestock/${props.props.wallet}/${props.props.name}` */
