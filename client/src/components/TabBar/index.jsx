import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

//tive que adicionar a classe dentro de <i> dentro de <Link> pra funcionar

const TabBar = props => {
  return (
    <div class="tab-nav-container">
      <Link to="/dashboard">
        <i
          className={props.match.path === '/dashboard' ? 'linkIconSelect las la-home' : 'linkIcon las la-home'}
        ></i>
      </Link>
      <Link to="/wallet">
        <i
          className={props.match.path === '/wallet' ? 'linkIconSelect las la-wallet' : 'linkIcon las la-wallet'}
        ></i>
      </Link>
      <Link to="/add-stock">
        <i
          className={
            props.match.path === '/add-stock'
              ? 'linkIconSelect las la-plus-circle'
              : 'linkIcon las la-plus-circle'
          }
        ></i>
      </Link>
      <Link to="/allstocks">
        <i
          className={
            props.match.path === '/allstocks'
              ? 'linkIconSelect las la-search-dollar'
              : 'linkIcon las la-search-dollar'
          }
        ></i>
      </Link>
      <Link to="/settings">
        <i className={props.match.path === '/settings' ? 'linkIconSelect las la-cog' : 'linkIcon las la-cog'}></i>
      </Link>
    </div>
  );
};

export default TabBar;
