var express = require('express');
var router = express.Router();
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.number);
	
	var user_id = { UserID : "None" };
	
	client.count(function(error,response,status){
		
			var count = response.count;
			user_id = { UserID : count};
			res.render('index',user_id);
		}
		
	);	
	
});

module.exports = router;
