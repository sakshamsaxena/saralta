/*
	Forms Route
*/

/* Core Modules */
let m = require('mongoose');
let express = require('express');
let config = require('../config/config.js');
let FormModel = require('../models/Forms.js');
let sanitizeParam = require('../util/paramValidation/ParameterValidation.js');

/* An instance of Router */
let Forms = express.Router();

/* Auth Middleware */
Forms.use(function(req, res, next) {
	next();
})

/* 
	Route Definitions
*/

/**
	GET  /:Type

	Protected Route to fetch a form by Type.
	- Type
		Format: Number
		Possible Values: [0-N] where N is the ID of the last form available.
		See the documentation for more on Form Types. [TODO]
*/
Forms.get('/:Type', function(req, res) {

	// Prepare Parameters
	var id = sanitizeParam.ValidateFormType(req.params.Type);

	// Connect here
	m.connect(config.MongoURL);

	// Process Logic
	FormModel.GetFormLayout(id)
		.then(function(layout) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.json(layout);
		})
		.catch(function(err) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.status(403).send("Error :\n\t" + err);
		})
});

/**
	POST  /:Type

	Protected Route to submit a response to a form by Type.
	- Type
		Format: Number
		Possible Values: [0-N] where N is the ID of the last form available.
		See the documentation for more on Form Types. [TODO]

	Post Data :
	- Data
		Format: Object
		Possible Values : As per the respective Form Type Layout.
		See the documentation for more on Form Types. [TODO]
*/
Forms.post('/:Type', function(req, res) {
	res.send(req.params.Type);
});

/**
	PUT  /:Type

	Protected Route to update a form layout by Type.
	- Type
		Format: Number
		Possible Values: [0-N] where N is the ID of the last form available.
		See the documentation for more on Form Types. [TODO]

	Put Data :
	- Data
		Format: Object
		Possible Values : As per the respective Form Type Layout.
		See the documentation for more on Form Types. [TODO]
*/
Forms.put('/:Type', function(req, res) {
	res.send(req.params.Type);
});

/**
	POST  /New

	Protected Route to create a new form layout.
	Post Data :
	- Data
		Format: Object
*/
Forms.post('/New', function(req, res) {
	res.send(req.params.Type);
});

module.exports = Forms;
