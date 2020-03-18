import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signOut } from '../../services/authentication';
import TabBar from '../../components/TabBar';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.props.updateUserInformation(null);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <nav className="Logout">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
        </style>
        <div className="logo-navbar">
          <Link to="/">Trakker</Link>
        </div>
        <div>Trakker</div>
        <div className="menu-navbar">
          {this.props.user && (
            <Fragment>
              {/*  <span>{this.props.user.name}</span> */}
              <button className="signout" onClick={this.handleSignOut}>
                Sign Out
              </button>
            </Fragment>
          )}
          <TabBar />
        </div>
      </nav>
    );
  }
}

export default Settings;
