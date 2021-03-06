import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { loadUniqueStockInformation } from '../../services/addstocks';
// import TabBar from '../../components/TabBar';
// import SingleStock from '../../components/SingleStock';
// import SearchWallet from '../../components/SearchWallet';

class Carrers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="page__wallet">
        <div className="walletViewContent" >
          <Link to="/"><img src="/img01.png" alt="logo" style={{ width: "25vw", margin: "3vw", "max-width": "125px" }} /></Link>
          <h2>Carrers</h2>
          <p>We saved a seat for you as we are always after nice and skilled people to contribute to our projects. If you have interest in coding and financial markets, please contact us through trakkerwallet@gmail.com with your best cv, LinkedIn profile or anything really - be creative!</p>
        </div>
      </section>
    );
  }
}

export default Carrers;
