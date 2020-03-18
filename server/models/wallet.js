'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  stocks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock'
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

module.exports = mongoose.model('Wallet', schema);
