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
        <div className="walletViewContent">
          <h2>About Us</h2>
          <p>We are a small team of 3 web developers based in Lisbon, Portugal. We have invested in stock markets and in cryptocurrencies for a few years now, and our project reflects what we think is one of the biggest constraints when it comes to investment: centralizing all your portfolio in one single app. Our mission with this project, which was built in MERN stack (MongoDB, Express, React and Node.js), is to give the user as few steps as possible when analyzing and controlling your portfolio. This is Trakker, inspired by your needs.
</p>
        </div>
      </section>
    );
  }
}

export default AboutUs;
