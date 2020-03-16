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
      wallet: '',
      date_of_purchase: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();

    const user = this.props.user;
    const wallet = this.props.user.wallet;
    console.log(wallet);
    const { name, type, quantity, buying_price, currency, date_of_purchase } = this.state;
    console.log(name, type, quantity, buying_price, currency, date_of_purchase, wallet);
    addStock({
      user,
      name,
      type,
      quantity,
      buying_price,
      currency,
      date_of_purchase,
      wallet
    })
      .then(stock => {
        console.log(stock);
        //this.props.history.push('/');
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
          <label htmlFor="type">
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.type}
                type="checkbox"
                id="stocks"
                name="stocks"
              />
              <label htmlFor="Stocks">Stocks</label>
            </div>
            <div>
              <input
                onChange={this.handleInputChange}
                value={this.state.type}
                type="checkbox"
                id="Crypto"
                name="crypto"
              />
              <label htmlFor="Crypto">Crypto</label>
            </div>
          </label>
          <label htmlFor="quantity">Quantity:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.quantity}
            type="number"
            id="quantity"
            name="quantity"
            min="1"
          />
          <label htmlFor="buying_price">Buying Price:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.buying_price}
            type="number"
            id="buying_price"
            name="buying_price"
            min="0"
          />
          <label htmlFor="date_of_purchase">Purchase Date:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.date_of_purchase}
            type="date"
            id="date_of_purchase"
            name="date_of_purchase"
          ></input>
          <button>Add Stock</button>
        </form>
      </div>
    );
  }
}

export default AddStockView;
