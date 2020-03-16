import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signOut } from '../../services/authentication';

const NavBar = props => {
  const handleSignOut = () => {
    signOut()
      .then(() => {
        props.updateUserInformation(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <nav className="nav-bar">
      <div className="logo-navbar">
        <Link to="/">TRAKKER</Link>
      </div>
      <div className="menu-navbar">
        {(props.user && (
          <Fragment>
            <span>{props.user.name}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </Fragment>
        )) || (
            <Fragment>
              <Link to="/sign-in">Sign In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </Fragment>
          )}
      </div>
    </nav>
  );
};

export default NavBar;
