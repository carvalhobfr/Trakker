import React, { Component } from 'react';
import './style.scss';

class SingleStockGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.changeToggle = this.changeToggle.bind(this);
  }

  changeToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <section className="stock__single-button" onClick={this.changeToggle}>
        <div className="stock__symbol">
          <h4>{this.props.single.name}</h4>
        </div>
        <div
          className={this.props.margin < 0 ? 'stock__change-negative' : 'stock__change-positive'}
        >
          <p>{this.props.margin.toFixed(2)} % </p>
        </div>
        <hr />
        {this.state.toggle && (
          <a href="/add-stock" className="add__button">
            Add to wallet
          </a>
        )}
      </section>
    );
  }
}

export default SingleStockGeneral;
