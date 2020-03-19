import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

//tive que adicionar a classe dentro de <i> dentro de <Link> pra funcionar

const TabBar = props => {
  return (
    <div class="tab-nav-container">
      <Link to="/dashboard">
        <i
          className={props.match.path === '/dashboard' ? 'linkIcon las la-home' : 'las la-home'}
        ></i>
      </Link>

      <Link to="/wallet">
        <i
          className={props.match.path === '/wallet' ? 'linkIcon las la-wallet' : 'las la-wallet'}
        ></i>
      </Link>

      <Link to="/allstocks">
        <i
          className={
            props.match.path === '/allstocks'
              ? 'linkIcon las la-search-dollar'
              : 'las la-search-dollar'
          }
        ></i>
      </Link>

      <Link to="/settings">
        <i className={props.match.path === '/settings' ? 'linkIcon las la-cog' : 'las la-cog'}></i>
      </Link>
    </div>
  );
};

export default TabBar;
