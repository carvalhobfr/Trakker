'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment');
const Stock = require('./../models/stock');
const Wallet = require('./../models/wallet');
const User = require('./../models/user');
const Mongoose = require('mongoose');

router.route('/daily-data').post((req, res, next) => {
  let startDate = moment(req.body.currentDate)
    .startOf('month')
    .toDate();
  let endDate = moment(req.body.currentDate)
    .endOf('month')
    .add(1, 'days')
    .toDate();

  Stock.aggregate([
    {
      $match: {
        date_of_purchase: {
          $gte: startDate,
          $lt: endDate
        }
      }
    },
    {
      $group: {
        _id: '$date_of_purchase',
        total_daily_sum: {
          $sum: '$buying_price'
        }
      }
    },
    {
      $project: {
        _id: '$_id',
        total_daily_sum: '$total_daily_sum',
        date: '$_id'
      }
    }
  ]).exec((err, result) => {
    if (err) {
      return next(err);
    } else {
      let set = {};
      set.labels = result.map(key => {
        return key.date.toLocaleDateString('pt-BR');
      });
      set.data = result.map(key => {
        return [key.total_daily_sum];
      });
      res.status(200).send(set);
    }
  });
});

router.route('/daily-data/:name').post(async (req, res, next) => {
  try {
    let name = req.params.name;
    let stocks = await Stock.find({ name: name });
    const totalQuantity = stocks.reduce((acc, value, i) => {
      return stocks[i].transaction == 'bought' ? acc + value.quantity : acc - value.quantity;
    }, 0);
    const totalPrice = stocks.reduce((acc, value, i) => {
      return stocks[i].transaction == 'bought'
        ? acc + value.price * value.quantity
        : acc - value.price * value.quantity;
    }, 0);
    res.json({ totalQuantity, totalPrice, name });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
