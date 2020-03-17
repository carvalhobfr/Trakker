import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

//tive que adicionar a classe dentro de <i> dentro de <Link> pra funcionar

const TabBar = props => {
  return (
    <div class="tab-nav-container">
      <div class="tab-purple">
        <i class="fas fa-home"></i>
        <Link to="/dashboard" class="fas fa-home"></Link>
      </div>
      <div class="tab-pink">
        <i class="fas fa-euro-sign"></i>
        <Link to="/wallet" class="fas fa-cog"></Link>
      </div>
      <div class="tab-yellow">
        <i class="fas fa-chart-bar"></i>
        <Link to="/allstocks" class="fas fa-cog"></Link>
      </div>
      <div class="tab-teal">
        <i class="fas fa-cog"></i>
        <Link to="/settings" class="fas fa-cog"></Link>
      </div>
    </div>
  );
};

export default TabBar;
