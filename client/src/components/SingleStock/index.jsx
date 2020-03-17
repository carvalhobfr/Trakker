import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { loadStockInformation } from '../../services/addstocks';

const SingleStock = props => {
  console.log(props);
  return (
    /* <a href={`singlestock/${props.props.wallet}/${props.props.name}`}> */
    <section className="stock__single-button">
      <a href={`singlestock/${props.props.wallet}/${props.props.name}`}>
        {' '}
        <h4>{props.props.name}</h4>{' '}
      </a>
      <p>{props.props.buying_price}$</p>
      <p>{props.props.quantity}</p>
    </section>
  );
};

export default SingleStock;
/* `singlestock/${props.props.wallet}/${props.props.name}` */
