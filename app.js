var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var argv = require('minimist')(process.argv.slice(2));

var index = require('./routes/index');
var test = require('./routes/test');
var users = require('./routes/users');
var testresults = require('./routes/testresults');
var mybookmgmt = require('./routes/mybookmgmt');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configure the API domain
var domain = 'localhost';
if(argv.domain !== undefined){
    domain = argv.domain;
}else{
    console.log('No --domain=xxx specified, taking default hostname "localhost".');
}

// Configure the API port
var port = 3456;
if(argv.port !== undefined){
    port = argv.port;
}else{
    console.log('No --port=xxx specified, taking default port ' + port + '.');
}

// Set and display the application URL
var applicationUrl = 'http://' + domain + ':' + port;
console.log('snapJob API running on ' + applicationUrl);
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route-specific
app.use('/',index);
app.use('/test',test);
app.use('/users', users);
app.use('/TestResults',testresults);
app.use('/myBookmgmt',mybookmgmt);


// If there is no matched-URL
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
