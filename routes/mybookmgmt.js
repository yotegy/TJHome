var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var app = express();

/* GET Test Results listing. */
router.get('/', function(req, res, next) {
  res.render('mybook_mgmt');
});

router.get('/insert',function(req,res,next){
	res.render('mybook_insert');
});

module.exports = router;





