import React from 'react';

// var alpha = require('alphavantage')({ key: 'JGVPFO4GLBB9BIUO' });

const Stock = props => (
	<div>
		<div>
			<p>
				Name: {props.name} Price: {props.price} Number: {props.num} Total: {props.total}
			</p>
		</div>
	</div>
);

const getPrice = (name, num) => {
	alpha.data.daily(name).then(data => {
		const imeSeries = data['Time Series (Daily)'];
		const today = Object.values(imeSeries)[0];
		const price = today['4. close'];
		const total = price * num;
		this.setState(() => ({
			price: price,
			total: total
		}));
	});
};






export { Stock, getPrice };
