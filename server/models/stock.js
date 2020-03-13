'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Stock', 'Crypto']
  },
  quantity: {
    type: Number
  },
  buying_price: {
    type: Number
  },
  currency: {
    type: String,
    default: 'EUR'
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wallet'
  },
  date_of_purchase: {
    type: String
  }
});

module.exports = mongoose.model('Stock', schema);
