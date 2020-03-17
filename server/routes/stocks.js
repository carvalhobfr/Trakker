'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');

const router = new Router();

router.post('/add-stock', async (req, res, next) => {
  console.log(req.body);
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
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/singlestock/:name', async (req, res, next) => {
  const stockName = req.params.name;
  try {
    const stock = await Stock.findOne({ name: stockName });
    res.json({ stock });
    console.log('BACKEND ', stock);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
