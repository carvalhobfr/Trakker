import React, { Component } from 'react';
// import { loadUniqueStockInformation } from '../../services/addstocks';
// import TabBar from '../../components/TabBar';
// import SingleStock from '../../components/SingleStock';
// import SearchWallet from '../../components/SearchWallet';

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="page__wallet">
        <div className="walletViewContent" >
          <h2>Privacy</h2>
          <p>Our privacy policy was created to affirm Trakker’s commitment with security, transparency and privacy. We follow the EU GDPR guidelines and won’t disclose either your personal data and your investments data.
          1.We collect your data with the sole purpose of identification and authentication.
          2.By signing up to our services, you agree that we collect and treat your personal data necessary for us to provide you a better service.
3.You authorize Trakker to store and keep your information to guarantee our quality measures, as well as complying with legal demands from financial authorities.</p>
        </div>
      </section>
    );
  }
}

export default Privacy;
