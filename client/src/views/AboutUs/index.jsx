import React, { Component } from 'react';
// import { loadUniqueStockInformation } from '../../services/addstocks';
// import TabBar from '../../components/TabBar';
// import SingleStock from '../../components/SingleStock';
// import SearchWallet from '../../components/SearchWallet';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="page__wallet">
        <div className="walletViewContent" style="margin-bottom: 2em">
          <h2>Trakker</h2>
          <p>We’re still writing the terms - they’ll be available soon.</p>
        </div>
      </section>
    );
  }
}

export default AboutUs;
