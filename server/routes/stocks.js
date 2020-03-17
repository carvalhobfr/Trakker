'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');

const router = new Router();

router.post('/add-stock', async (req, res, next) => {
	console.log("Req.body",req.body);
	const {
		name,
		type,
		quantity,
		buying_price,
		currency,
		date_of_purchase,
		user,
		wallet
	} = req.body.data;
	try {
		//const wallet = await Wallet.findOne({ user: user._id });
    // const totalAmount = req.body.buying_price.reduce((total, buying_price) => total + buying_price, 0);
    // btc= [ qty, value] , [qty2 , value 2]
		const stock = await Stock.create({
			name,
			type,
			quantity,
      buying_price,
			currency,
			date_of_purchase,
			wallet
		});
		res.json({ stock });
		console.log('totalAMount', totalAmount);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.get('/allstocks/:id', async (req, res, next) => {
  const walletID = req.params.id;
  try {
    const stocks = await Stock.find({ wallet: walletID });
    res.json({ stocks });
    console.log('BACKEND ', stocks);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/singlestock/name/:name', async (req, res, next) => {
  const stockName = req.params.name;
  try {
    const stock = await Stock.findOne({ stockName });
    res.json({ stock });
    //console.log('BACKEND ', stock);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/singlestock/:id', async (req, res, next) => {
  const stockID = req.params.id;
  try {
    const stock = await Stock.findById({ stockID });
    res.json({ stock });
    //console.log('BACKEND ', stock);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id);
  const walletID = req.params.id;
  console.log(walletID);
  try {
    const wallet = await Wallet.findById({ _id: walletID });
    res.json({ wallet });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
