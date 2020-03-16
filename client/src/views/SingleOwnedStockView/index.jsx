import React, { Component } from 'react';
import { loadStockInformation } from './../../services/addstocks';

class SingleOwnedStockView extends Component {
  super(props) {
    constructor(props);
    this.state = {
      buying_price: 0,
      date_of_purchase: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.stockid;
    loadStockInformation(id).then(stockData => {
      console.log(stockData);
    }).catch;
  }

  render() {
    return <div></div>;
  }
}

export default SingleOwnedStockView;
