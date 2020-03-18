import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

//tive que adicionar a classe dentro de <i> dentro de <Link> pra funcionar

const TabBar = props => {
  return (
    <div class="tab-nav-container">
      <a href="/dashboard" class="linkIcon">
        <i class="fas fa-home" />
      </a>
      {/* <span style="font-size: 48px; color: Dodgerblue;">
        <i class="fas fa-camera"></i>
      </span> */}
      <Link to="/wallet" class="linkIcon">
        <i class="fas fa-euro-sign"></i>
      </Link>
      <Link to="/allstocks" class="linkIcon">
        <i class="fas fa-chart-bar" />
      </Link>
      <Link to="/settings" class="linkIcon">
        <i class="fas fa-cog" />
      </Link>
    </div>
  );
};

export default TabBar;
