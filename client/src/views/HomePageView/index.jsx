import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HomePageView extends Component {
  render() {
    return (
      <body>
        <header>
          <div>
            <h1>
              <strong>Control all your assets in one place</strong>
            </h1>
            <h3 className="secondary-text">
              Trakker is a portfolio manager that unifies all your crypto and stocks shares in one
              place.
            </h3>
            <button className="signin-button">
              <Link to="/sign-in">Sign In</Link>
            </button>
          </div>
        </header>
        <section className="mockups">
          <div className="mockup1">
            <h2>
              <strong>Manage your portfolio like never before</strong>
            </h2>
            <div className="imageAndText">
              <h4>
                Fatback excepteur est sed nulla nisi. Swine eu pariatur shoulder ut culpa. In ut
                anim salami. Ullamco flank elit veniam lorem boudin.
              </h4>
              <img src="/kinvo_bg.png" alt="" />
            </div>
          </div>
          <div className="mockup2">
            <h3>
              <strong>Monitor stocks and crypto in real time.</strong>
            </h3>
            <h5>
              Fatback excepteur est sed nulla nisi. Swine eu pariatur shoulder ut culpa. In ut anim
              salami. pariatur shoulder ut culpa
            </h5>
            <img src="/stocksview.png" alt="" />
          </div>
        </section>
        <footer>
          Trakker
          <ul>
            <li>❔ Help Center</li>
            <li>💬About Us</li>
            <li>🔒Privacy</li>
            <li>🤝Accessibility</li>
            <li>📜Terms</li>
          </ul>
        </footer>
      </body>
    );
  }
}

export default HomePageView;
