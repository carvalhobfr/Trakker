import React, { Component } from 'react';
import { addStock } from './../../services/addstocks';

class AddStockView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      quantity: 0,
      buying_price: 0,
      currency: 'USD',
      wallet: {},
      date_of_purchase
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, type, quantity, buying_price, currency, date_of_purchase } = this.state;
    addStock({
      name,
      type,
      quantity,
      buying_price,
      currency,
      date_of_purchase
    })
      .then(stock => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button disabled={this.state.password.length < 5}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default AddStockView;
