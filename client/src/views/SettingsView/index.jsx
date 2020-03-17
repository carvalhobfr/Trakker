import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { signOut } from '../../services/authentication';
import TabBar from '../../components/TabBar';

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
      <div>Trakker</div>
      <div className="menu-navbar">
        {props.user && (
          <Fragment>
            <button onClick={handleSignOut}>Sign Out</button>
          </Fragment>
        )}
        <TabBar />
      </div>
    </nav>
  );
};

export default Settings;
