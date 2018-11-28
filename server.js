var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// add logging and static middleware to express
app.use(logger('dev'));

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res, next) {

	try {
		// render the 'index' template, and pass in a few variables
		res.render('index', {title: 'Hey', message: 'Hello There!'});
	} catch (e) { // if there are any errors, send them off the logger
		next(e);

	}
});

// start up the server
app.listen(process.env.PORT || 3000, function () {
	console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});

 
