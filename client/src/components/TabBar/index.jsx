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

      <Link to="/wallet" className={props.match.path === '/wallet' ? 'linkIcon' : ''}>
        <i class="las la-wallet"></i>
      </Link>

      <Link to="/allstocks" className={props.match.path === '/allstocks' ? 'linkIcon' : ''}>
        <i class="las la-search-dollar"></i>
      </Link>

      <Link to="/settings" className={props.match.path === '/settings' ? 'linkIcon' : ''}>
        <i class="las la-cog"></i>
      </Link>
    </div>
  );
};

export default TabBar;
