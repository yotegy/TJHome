var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var argv = require('minimist')(process.argv.slice(2));

//[SWAGGER]
var swagger = require('swagger-node-express')
	, test = require('./models/test')
	, models = require('./models/models');

var routes = require('./routes/index');
var users = require('./routes/users');
var testresults = require('./routes/testresults');

var dbconfig = require('./dbconnection').pool;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
 

//[SWAGGER] Set the main handler in swagger
swagger.setAppHandler(app);

//[SWAGGER] Adding models and methods to our RESTFul service
swagger.addModels(models)
    .addGet(test.dummyTestMethod)
	.addGet(test.testresults);

//[SWAGGER] set api info
swagger.setApiInfo({
    title: "TJ Home Application",
    description: "API Test",
    termsOfServiceUrl: "",
    contact: "yotegy@gmail.com",
    license: "TJ",
    licenseUrl: ""
});

//Set api-doc path
swagger.configureSwaggerPaths('', 'api-docs', '');


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
 
swagger.configure(applicationUrl, '1.0.0');
 

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

// Router
// common settin
  // DB
  app.use(function(req,res,next){
	 
	 req.dbconfig = dbconfig;	  
	 next(); 
	 
  });


// route-specific
//app.use('/', routes);
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.use('/users', users);
app.use('/TestResults',testresults);


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
