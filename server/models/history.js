'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  dailyClosingPrices: {
    type: [Array]
  },
  weeklyClosingPrices: {
    type: [Array]
  },
  monthlyClosingPrices: {
    type: [Array]
  }
});

module.exports = mongoose.model('History', schema);
