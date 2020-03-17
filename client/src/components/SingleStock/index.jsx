import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { loadStockInformation } from '../../services/addstocks';

const SingleStock = props => {
  loadStockInformation(props._id);
  return (
    <div>
      <h4>{props.name}</h4>
    </div>
  );
};

export default SingleStock;
