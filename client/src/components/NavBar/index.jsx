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
      <Link to="/">Home</Link>
      {(props.user && (
        <Fragment>
          <button onClick={handleSignOut}>Sign Out</button>
        </Fragment>
      )) || (
        <Fragment>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </Fragment>
      )}
    </nav>
  );
};

export default NavBar;
