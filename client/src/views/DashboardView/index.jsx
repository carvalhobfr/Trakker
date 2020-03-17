import React, { Component } from 'react';
import { loadWalletInformation } from './../../services/addstocks';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: {}
    };
  }

  async componentDidMount() {
    console.log(this.props);
    const wallet = await loadWalletInformation(this.props.user.wallet);
    this.setState({ wallet });
  }

  render() {
    return (
      <section className="page__dashboard">
        <h2>Trakker</h2>
        <h4>Good afternoon</h4>
        <h6>Here's the summary of your account</h6>
      </section>
    );
  }
}

export default DashboardView;
