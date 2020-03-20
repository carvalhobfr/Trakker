'use strict';
const axios = require('axios');
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
  console.log(name);
  try {
    const exists = await History.findOne({ name: name }).count();
    console.log('EXISTS IS HERE', exists);
    if (!exists) {
      const dailyClosingPrices = await NewrequestDaily(name);
      const history = await History.create({
        name,
        dailyClosingPrices
      });
      console.log('HISTORY HERE', history);
      res.json({ history });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
