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
        return key.date.toLocaleDateString('pt-PT');
      });
      set.data = result.map(key => {
        return [key.total_daily_sum];
      });
      res.status(200).send(set);
      /*  Wallet.populate(
        result,
        {
          path: 'date',
          select: 'name -_id'
        },
        (err, populatedResult) => {
          if (err) {
            return next(err);
          } else {
            let set = {};
            set.labels = populatedResult.map(key => {
              return key.date.name;
            });
            set.data = populatedResult.map(key => {
              return [key.total_daily_sum];
            });
            res.status(200).send(set);
          }
        }
      ); */
    }
  });
});

module.exports = router;
