import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { happy } from 'ionicons/icons';

//tive que adicionar a classe dentro de <i> dentro de <Link> pra funcionar

const TabBar = props => {
  return (
    <div class="tab-nav-container">
      <a href="/dashboard" class="linkIcon">
        <i class="las la-home"></i>
      </a>
      <ion-icon name="heart"></ion-icon>

      {/* <span style="font-size: 48px; color: Dodgerblue;">
        <i class="fas fa-camera"></i>
      </span> */}
      <Link to="/wallet" class="linkIcon">
        <i class="las la-wallet"></i>
      </Link>
      <Link to="/allstocks" class="linkIcon">
        <i class="las la-chart-bar"></i>
      </Link>
      <Link to="/settings" class="linkIcon">
        <i class="las la-user-cog"></i>
      </Link>
    </div>
  );
};

export default TabBar;
