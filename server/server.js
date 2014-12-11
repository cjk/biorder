// REST-API Server for the Biorder-App

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8088; 		// set our port

// Setup DB-driver
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/biorder');

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();
require('./app/routes')(router);

// middleware to use for all requests
app.use(function(req, res, next) {
	console.log('Middleware is processing a request');
	next();
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
// app.use('/static', express.static(__dirname + '/files'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server API now ready on port ' + port);
