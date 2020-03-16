import React, { Component } from "react";
import axios from "axios";

class OwnedStock extends Component {
  state = {
    ownedStock: {}
  };

  componentDidMount() {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.props.match.params.id}&apikey=RWIQ5QDC9KY8INZG`
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          ownedStock: response.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="single-ownedStock-container">
          <div className="ownedStock-info-detail">
            <div className="headline-container">
              <h4>{this.state.ownedStock.name}</h4>
              <h4>{this.state.ownedStock.type}</h4>
            </div>
            <p>{this.state.ownedStock.symbol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnedStock;