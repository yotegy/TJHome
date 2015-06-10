var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.number);
	res.render('index');
});

module.exports = router;
