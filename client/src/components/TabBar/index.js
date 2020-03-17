import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const tabs = document.querySelectorAll('.tab');

const TabBar = props => {
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
	);
};

export default TabBar;
