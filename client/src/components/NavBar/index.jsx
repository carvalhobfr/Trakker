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
      <style>@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');</style>
      <div className="logo-navbar">
        <Link to="/"><img src="/img02.png" alt="Trakker's logo" /></Link>
      </div>
      <div className="menu-navbar">
        <Fragment>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </Fragment>
          
      </div>
    </nav>
  );
};

export default NavBar;
