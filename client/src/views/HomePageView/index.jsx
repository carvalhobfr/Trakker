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
              <strong>
                Control all your assets in <span className="place">one place</span>
              </strong>
            </h1>
            <h3 className="secondary-text">
              <span className="place">Trakker</span> is a portfolio manager that unifies and updates
              in real time <br></br>
              <span className="place"> all your stocks and crypto </span> in one single application.
            </h3>
            <button className="signin-button">
              <Link to="/sign-in">Sign In</Link>
            </button>
          </div>
        </header>
        <section className="mockups">
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
          <div className="mockup1">
            <h2>
              <strong>Manage your portfolio like never before</strong>
            </h2>
            <div className="imageAndText">
              <h4>
                Fatback excepteur est sed nulla nisi. Swine eu pariatur shoulder ut culpa. In ut
                anim salami. Ullamco flank elit veniam lorem boudin.
              </h4>
            </div>
          </div>
        </section>
        <footer>
          Trakker
          <ul>
            <li>❔ Help Center</li>
            <li>💬About Us</li>
            <li>🔒Privacy</li>
            <hr />
            <li>🤝Accessibility</li>
            <li>📜Terms</li>
          </ul>
        </footer>
      </body>
    );
  }
}

export default HomePageView;
