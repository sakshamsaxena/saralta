/* Require Modules */
const express = require('express');
const bodyParser = require('body-parser');

/* Require Routes */
const auth = require('./routes/Auth.js');
const forms = require('./routes/Forms.js');
const quickAccess = require('./routes/QuickAccess.js');

/* Our App! */
const app = express();

/* Basic Middlewares */
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('json spaces', 4);

/* Routes */

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Content-Type', 'application/json; charset=utf-8');
	next();
});

// Application Routes
app.get('/', function(req, res) {
	res.render('index.html');
})
app.use('/Auth', auth);
app.use('/Forms', forms);
app.use('/QuickAccess', quickAccess);

// Render all other routes as HTTP 404 Not Found Error
app.use(function(req, res) {
	res.status(404).send('Ain\'t no path like this.');
});

/* Listen */
app.listen(3000, function() {
	console.log('Saralta is live on port 3000!');
});

module.exports = app;
