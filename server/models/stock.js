'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wallet'
  },

  name: {
    type: String
  },
  //Missing an enum if bought or sold
  transaction: {
    type: String,
    enum: ['bought', 'sold']
  },

  type: {
    type: String,
    enum: ['Stock', 'Crypto'],
    required: true
  },

  quantity: {
    type: Number
  },

  price: {
    type: Number,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },

  date: {
    type: Date
  }
});

module.exports = mongoose.model('Stock', schema);
