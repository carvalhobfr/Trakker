'use strict';
const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

/* const instance = axios.create({
  baseURL: 'https://www.alphavantage.co/query?'
}); */

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');
const History = require('./../models/history');

const NewrequestDaily = async name =>
	new Promise((resolve, reject) => {
		axios
			.get(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
			)
			.then(result => {
				const dailyStock = result.data;
				const info = dailyStock['Time Series (Daily)'];
				const allKeys = Object.keys(info);
				let data = [];
				for (let i = 0; i < allKeys.length; i++) {
					let key = Object.keys(info)[i];
					let result = info[key]['4. close'];
					data.push([key, result]);
				}
				resolve(data);
			})
			.catch(reject);
	});

const router = new Router();

router.post('/add-daily', async (req, res, next) => {
	const { name } = req.body;
	try {
		const exists = await History.findOne({ name: name }).count();
		if (!exists) {
			const dailyClosingPrices = await NewrequestDaily(name);
			const history = await History.create({
				name: name.toUpperCase(),
				dailyClosingPrices
			});
			res.json({ history });
		} else if (exists) {
			let lastDate = moment(req.body.currentDate).subtract(1, 'days');
			//.toDate();
			const history = await History.findOne({ name: name });
			if (history.dailyClosingPrices[0] !== lastDate) {
				const updatedClosingPrices = await NewrequestDaily(name);
				History.findOneAndUpdate({ name }, { dailyClosingPrices: updatedClosingPrices });
			}
		}
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.get('/daily/all', async (req, res, next) => {
	try {
		const historyAllDaily = await History.find().exec();
		res.json({ historyAllDaily });
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.get('/daily/:name', async (req, res, next) => {
	const name = req.params.name;
	try {
		const historyDaily = await History.find({ name: name });
		res.json({ historyDaily });
	} catch (error) {
		console.log(error);
		next(error);
	}
});
module.exports = router;
