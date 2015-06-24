var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.number);
	
	var user_id = { UserID : "None" };
	res.render('test',user_id);
});

module.exports = router;
