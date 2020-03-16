import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HomePageView extends Component {
  render() {
    return (
      <body>
        <header className="header">
          <div>
            <h1>
              <strong>Control all your assets in one place</strong>
            </h1>
            <h4 className="secondary-text">
              Trakker is a portfolio manager that unifies all your crypto and stocks shares in one
              place.
            </h4>
            <button className="signin-button">
              <Link to="/sign-in">Sign In</Link>
            </button>
          </div>
        </header>
        <section className="mockups">
          <div className="mockup1">
            <h3>
              <strong>Manage your portfolio like never before</strong>
            </h3>
            <h5>
              Fatback excepteur est sed nulla nisi. Swine eu pariatur shoulder ut culpa. In ut anim
              salami. Ullamco flank elit veniam lorem boudin.
            </h5>
          </div>
        </section>
      </body>
    );
  }
}

export default HomePageView;
