//General imports
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
//Component imports
import NavBar from './components/NavBar';

import ProtectedRoute from './components/ProtectedRoute';
//Views imports
import SignInView from './views/SignInView';
import SignUpView from './views/SignUpView';
import HomePageView from './views/HomePageView';
import AddStockView from './views/AddStockView';
import SingleOwnedStockView from './views/SingleOwnedStockView';
import DashboardView from './views/DashboardView';
import SettingsView from './views/SettingsView';
import WalletView from './views/WalletView';
import AllStocks from './views/AllStocks';

//Services imports
import { loadUserInformation } from './services/authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    loadUserInformation()
      .then(user => {
        this.updateUserInformation(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
        <Switch>
          {/* <Route path="/" exact component={HomePageView} /> */}
          <ProtectedRoute
            path="/"
            exact
            authorized={!this.state.user}
            redirect={'/dashboard'}
            render={props => <HomePageView />}
          />

          <ProtectedRoute
            path="/sign-up"
            authorized={!this.state.user}
            redirect={'/'}
            render={props => (
              <SignUpView {...props} updateUserInformation={this.updateUserInformation} />
            )}
          />

          <ProtectedRoute
            path="/sign-in"
            authorized={!this.state.user}
            redirect={'/'}
            render={props => (
              <SignInView {...props} updateUserInformation={this.updateUserInformation} />
            )}
          />

          <ProtectedRoute
            path="/add-stock"
            authorized={this.state.user}
            redirect={'/add-stock'}
            render={props => (
              <AddStockView
                {...props}
                user={this.state.user}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />
          {/*  <ProtectedRoute
              path="/add-stock"
              authorized={this.state.user}
              redirect={'/dashboard'}
              render={props => (
                <DashboardView
                  {...props}
                  user={this.state.user}
                  updateUserInformation={this.updateUserInformation}
                />
              )}
            /> */}

          <ProtectedRoute
            path="/dashboard"
            authorized={this.state.user}
            redirect={'/dashboard'}
            render={props => (
              <DashboardView
                {...props}
                user={this.state.user}
                wallet={this.state.user.wallet}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />

          <ProtectedRoute
            path="/singlestock"
            authorized={this.state.user}
            redirect={'/singlestock'}
            render={props => (
              <SingleOwnedStockView
                {...props}
                user={this.state.user}
                wallet={this.state.user.wallet}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />

          <ProtectedRoute
            path="/allstocks"
            authorized={this.state.user}
            redirect={'/allstocks'}
            render={props => (
              <AllStocks
                {...props}
                user={this.state.user}
                wallet={this.state.user.wallet}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />

          <ProtectedRoute
            path="/wallet"
            exact
            authorized={this.state.user}
            redirect={'/wallet'}
            render={props => (
              <WalletView
                {...props}
                wallet={this.state.user.wallet}
                user={this.state.user}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />

          <ProtectedRoute
            path="/settings"
            exact
            authorized={this.state.user}
            redirect={'/settings'}
            render={props => (
              <SettingsView
                {...props}
                user={this.state.user}
                updateUserInformation={this.updateUserInformation}
              />
            )}
          />

          {/* <Route path="/error" component={ErrorView} />
                <Redirect to="/error" /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
