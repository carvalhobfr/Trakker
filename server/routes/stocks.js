'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');

const router = new Router();

router.post('/add-stock', (req, res, next) => {
  const userID = req.user._id;
  const { name, type, quantity, buying_price, currency, date_of_purchase } = req.body;
  Wallet.findOne({ user: userID })
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
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
