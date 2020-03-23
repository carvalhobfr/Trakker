import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import NavBar from './../../components/NavBar';


class HomePageView extends Component {
  render() {
    return (
      <body>
        <NavBar />
        <header>
          <div>
            <h1>
              <strong>
                Control all your assets in <span className="place">one place</span>
              </strong>
            </h1>
            <h3 className="secondary-text">
              <span className="place">Trakker</span> is a portfolio manager that unifies and updates
              in real time
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
              Trakker is a free platform that helps you to manage, analyse and track your
              investments, even if you have assets in different exchanges or financial institutions.
            </h5>
            <img src="/stocksview.png" alt="" />
          </div>
          <div className="mockup1">
            <h2>
              <strong>
                Investing is <span className="noteasy">not</span> easy. We’re here to help you with
                that.
              </strong>
            </h2>
            <div className="imageAndText">
              <h4>
                Manage your portfolio like never before. The more investments you make, the more
                difficult it gets to track your assets and markets variations. Our{' '}
                <strong>simple and intuitive tool</strong> gathers all you have in one place.
              </h4>
            </div>
          </div>
        </section>
        <footer>
          <h3>Trakker</h3>
          <ul>
            <a href="/help"><li>❔ Help Center</li></a>
            <a href="/about"><li>💬About Us</li></a>
            <a href="/privacy"><li>🔒Privacy</li></a>
            <hr />
            <a href="/careers"><li>🤝Careers</li></a>
            <a href="terms"><li>📜Terms</li></a>
          </ul>
          <p>Trakker Copyright © 2020</p>
        </footer>
      </body>
    );
  }
}

export default HomePageView;
