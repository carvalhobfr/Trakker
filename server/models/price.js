'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	lastClosePrice: {
		type: [Number]
	},
	actualPrice: {
		type: [Number]
	}
});

module.exports = mongoose.model('Price', schema);
