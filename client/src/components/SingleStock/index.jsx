import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { loadStockInformation } from '../../services/addstocks';

const SingleStock = props => {
  console.log(props);
  return (
    <section className="stock__single-button">
      <h4>{props.props.name}</h4>
      <p>{props.props.buying_price}$</p>
      <p>{props.props.quantity}</p>
    </section>
  );
};

export default SingleStock;
