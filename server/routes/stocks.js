'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');
const alpha = require('alphavantage')({ key: '{{RWIQ5QDC9KY8INZG}}' });

const router = new Router();

router.post('/add-stock', (req, res, next) => {
	const user = req.params;
	const { name, type, quantity, buying_price, currency, date_of_purchase } = req.body;
	Wallet.findOne({ user })
		.then(wallet => {
			return Stock.create({
				name,
				type,
				quantity,
				buying_price,
				currency,
				date_of_purchase,
				wallet
			});
		})
		.then(stock => {
			console.log(stock);
			res.redirect('/');
		})
		.catch(error => {
			next(error);
		});
});

router.get('/stock-information/:id', (req, res, next) => {
	const stockId = req.params.id;
	Stock.findById(stockId)
		.then(stock => {
			res.json({ stock });
		})
		.catch(error => {
			next(error);
		});
});

module.exports = router;
