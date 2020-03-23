'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
	res.json({ type: 'success', data: { title: 'Welcome to Trakker' } });
});

router.get('/private', routeGuard, (req, res, next) => {
	res.json({});
});

module.exports = router;
