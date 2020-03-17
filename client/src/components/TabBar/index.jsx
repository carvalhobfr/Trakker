import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';




const TabBar = props => {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => {
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      clickedTab.classList.add('active');
    });
  });
  return (


    <div class="tab-nav-container">
      <div class="tab active purple">
        <i class="fas fa-home"></i>
        <p>Home</p>
      </div>
      <div class="tab pink">
        <i class="far fa-heart"></i>
        <p>Likes</p>
      </div>
      <div class="tab yellow">
        <i class="fas fa-chart-bar"></i>
        <p>Charts</p>
      </div>
      <div class="tab teal">
        <i class="fas fa-cog"></i>
        <p>Setting</p>
      </div>
    </div>
  )

};

export default TabBar;
