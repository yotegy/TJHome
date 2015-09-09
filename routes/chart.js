var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/linewithfocus', function(req, res, next) {
	console.log(" Enter Line with focus chart");
	
	res.render('chart/linewithfocuschart.jade');
	
});

module.exports = router;
