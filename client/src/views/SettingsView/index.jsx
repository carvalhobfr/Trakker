import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signOut } from '../../services/authentication';

const Settings = props => {
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
    <nav className="Logout">
      <style>@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');</style>
      <div className="logo-navbar">
        <Link to="/">Trakker</Link>
      </div>
      <div className="menu-navbar">
        {props.user && (
          <Fragment>
            <span>{props.user.name}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Settings;
