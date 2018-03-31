/*
	Forms Route
*/

/* Core Modules */
let m = require('mongoose');
let express = require('express');
var multer = require('multer');
let config = require('../config/config.js');
let FormModel = require('../models/Forms.js');
let UserModel = require('../models/User.js');

/* Init */
let Forms = express.Router();
var upload = multer();

/* Auth Middleware */
Forms.use(function(req, res, next) {
	next();
});

/**

	User Route Definitions

**/

/**
	GET  /

	Public Route to fetch all Form Types.
*/
Forms.get('/', function(req, res) {

	// Connect here
	m.connect(config.MongoURL);

	// Process Logic
	FormModel.GetFormTypes()
		.then(function(types) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.json(types);
		})
		.catch(function(err) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.status(403).json({'error': err});
		});
});

/**
	GET  /:Type

	Protected Route to fetch a form by Type.
	- Type
		Format: Number
		Possible Values: [0-N] where N is the ID of the last form available.
		See the documentation for more on Form Types. [TODO]
*/
Forms.get('/:Type', function(req, res) {

	// Parameters
	var id = req.params.Type;

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
			res.status(403).json({'error': err});
		});
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
Forms.post('/:Type', upload.array(), function(req, res) {

	// Parameters
	var type = req.params.Type;
	console.log('form data')
	console.log(req.body);
	var formData = req.body;
	var id = "5abf8b814f81c60226b9dcae";

	// Connect here
	m.connect(config.MongoURL);

	// Process Logic
	UserModel.SubmitForm(id, type, formData)
		.then(function(doc) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.json(doc);
		})
		.catch(function(err) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.status(403).json({'error': err});
		})
	
});

/**

	Admin Route Definitions
	
**/

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
	
	// Parameters
	var type = req.params.Type;
	var formData = JSON.parse(req.body.formData);

	// Connect here
	m.connect(config.MongoURL);

	// Process Logic
	FormModel.UpdateFormLayout(type, formData)
		.then(function(doc) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.json(doc);
		})
		.catch(function(err) {
			// Close connection (important!)
			m.connection.close();

			// Send response
			res.status(403).json({'error': err});
		})
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
