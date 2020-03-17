import React, { Component } from 'react';
import { addStock } from './../../services/addstocks';
import './style.scss';
import TabBar from './../../components/TabBar';

class AddStockView extends Component {
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

  async handleFormSubmission(event) {
    event.preventDefault();

    const user = this.props.user;
    const wallet = this.props.user.wallet;
    const { name, type, quantity, buying_price, currency, date_of_purchase } = this.state;
    //console.log(name, type, quantity, buying_price, currency, date_of_purchase, wallet);
    try {
      const stock = await addStock({
        user: user._id,
        name,
        type,
        quantity,
        buying_price,
        currency,
        date_of_purchase,
        wallet
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="page__add-stock">
        <h2>Trakker</h2>
        <h4>Add asset to your wallet</h4>
        <form className="form__add-stock" onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="...AMZN, GOOGL, TSLA"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            type="select"
            onChange={this.handleInputChange}
            value={this.state.type}
          >
            <option value="Stock">Stock</option>
            <option value="Crypto">Crypto</option>
          </select>

          <label htmlFor="quantity">Quantity:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.quantity}
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            placeholder="...50, 100, 500"
          />
          <label htmlFor="buying_price">Buying Price:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.buying_price}
            type="number"
            id="buying_price"
            name="buying_price"
            min="0"
            step="0.0001"
            placeholder="e.g: 154.25$"
          />
          <label htmlFor="date_of_purchase">Purchase Date:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.date_of_purchase}
            type="date"
            id="date_of_purchase"
            name="date_of_purchase"
          ></input>
          <button>Add to wallet</button>
        </form>
        <TabBar />
      </section>
    );
  }
}

export default AddStockView;
