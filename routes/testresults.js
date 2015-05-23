var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

/* GET Test Results listing. */
router.get('/', function(req, res, next) {
  res.send('Test Result List will come sooner or later...');
});

/* Post Test Result input */
router.post('/',function(req,res,next){
	
	res.send(' Post test Result is called');
	
});

module.exports = router;





