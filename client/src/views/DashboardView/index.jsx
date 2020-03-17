import React, { Component } from 'react';

export class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 'Stock',
      quantity: '',
      buying_price: '',
      currency: 'USD',
      wallet: '',
      date_of_purchase: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }
  render() {
    return (
      <section className="page__add-stock">
        <h2>Trakker</h2>
        <h4>Good afternoon</h4>
        <h6>Here's the summary of your account</h6>
      </section>
    );
  }
}

export default DashboardView;
