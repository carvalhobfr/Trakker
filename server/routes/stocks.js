'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');

const router = new Router();

router.post('/add-stock', async (req, res, next) => {
  const { name, transaction, type, quantity, price, currency, date, wallet } = req.body.data;
  try {
    const stock = await Stock.create({
      name : name.toUpperCase(),
      transaction,
      type,
      quantity,
      price,
      currency,
      date,
      wallet
    });
    await Wallet.findByIdAndUpdate(
      { _id: wallet },
      { $inc: { starting_balance: price * quantity } }
    );
    await Wallet.findByIdAndUpdate({ _id: wallet }, { $inc: { number_of_stocks: quantity } });
    res.json({ stock });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/remove-stock', async (req, res, next) => {
  const { name, type, quantity, price, currency, date, wallet } = req.body.data;
  try {
    const stock = await Stock.create({
      name,
      transaction: 'sold',
      type,
      quantity,
      price,
      currency,
      date,
      wallet
    });
    await Wallet.findByIdAndUpdate(
      { _id: wallet },
      { $inc: { starting_balance: -Math.abs(price) } }
    );
    await Wallet.findByIdAndUpdate({ _id: wallet }, { $inc: { sold_balance: price * quantity } });
    await Wallet.findByIdAndUpdate(
      { _id: wallet },
      { $inc: { number_of_stocks: -Math.abs(quantity) } }
    );

    res.json({ stock });
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
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/singlestock/:id/:name', async (req, res, next) => {
  const walletID = req.params.id;
  const stockName = req.params.name;
  try {
    const stock = await Stock.find({ wallet: walletID, name: stockName });
    res.json({ stock });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const walletID = req.params.id;
  try {
    const wallet = await Wallet.findById({ _id: walletID });
    res.json({ wallet });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
