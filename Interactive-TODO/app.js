/**
 * This file describes the complete application initial setup
 * It contains all the middleware imports
 */

// Imports of all the general middleware for express
var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

// services is the backend services which connect to the database
var todoServices     = require('./services/todoServices');
var noteServices     = require('./services/noteServices');


var dbConfig     = require('./config/db');
var mongoose     = require('mongoose');

mongoose.connect(dbConfig.url, function(err) {
	if(err) {
		console.log('connection error to the database', err);
	} else {
		console.log('connection successful to the database');
	}
});

// Loading the express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('env','development');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//todo services to be served
app.use('/todo', todoServices);
app.use('/note', noteServices);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
