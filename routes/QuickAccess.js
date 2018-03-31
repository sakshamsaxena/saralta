/*
	QuickAccess Route
*/

/* Core Modules */
let m = require('mongoose');
let express = require('express');
let config = require('../config/config.js');
let QA = require('../mappers/QuickAccess.js');

/* An instance of Router */
let QuickAccess = express.Router();

/* Auth Middleware */
QuickAccess.use(function(req, res, next) {
	// set userid here
	next();
});

/* Route Definitions */

QuickAccess.get('/', function(req, res) {

	// Connect here
	m.connect(config.MongoURL);

	// Process Query directly
	QA.GetQuickAccessItems(req.userId)
		.then(function(qa) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.json(qa);
		})
		.catch(function(err) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.status(403).json({'error': err});
		});
});

module.exports = QuickAccess;
