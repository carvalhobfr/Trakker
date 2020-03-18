'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  lastClosePrice: {
    type: [number],
  },
  number_of_stocks: {
    type: Number
  },
  starting_balance: {
    type: Number
  },
  current_balance: {
    type: Number
  }
});

module.exports = mongoose.model('Price', schema);
