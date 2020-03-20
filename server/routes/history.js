'use strict';

const { Router } = require('express');

//const User = require('./../models/user');
const Wallet = require('./../models/wallet');
const Stock = require('./../models/stock');
const History = require('./../models/history');

const router = new Router();

/* router.post('/add-daily', async (req, res, next) => {
  const { name } = req.body.data;
  try {
    const exists = await History.find({name: name});
    if (!exists) {
      const history = await History.create({
      name,
      dailyClosingPrices
    });
    res.json({ history });
    }
    
  
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

module.exports = router;
