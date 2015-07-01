var express = require('express');
var router = express.Router();
var elastic = require('../private/elastic/elasticGreeting');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(" Enter elastic greeting");
	
	elastic.greeting(req,res,next);
	
});

router.get('/search', function(req, res, next) {
	console.log(" Enter elastic search");
	
	elastic.search(req,res,next);
	
});

router.get('/suggest', function(req, res, next) {
	console.log(" Enter elastic suggest");
	
	elastic.suggest(req,res,next);
	
});

module.exports = router;
