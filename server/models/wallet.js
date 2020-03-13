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
  }
});

module.exports = mongoose.model('Wallet', schema);
