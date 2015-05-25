var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var multer = require('multer');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


/* GET Test Results listing. */
router.get('/', function(req, res, next) {
  res.send('Test Result List will come sooner or later...');
});

/* Post Test Result input */
router.post('/',[multer({ dest: './uploads/'}), function(req,res,next){
	if (!req.body) {
		res.sendStatus(400);
		res.send(" There isn't body ");
	}
	console.log("body:::::");
	console.log(req.body);
	
	console.log("files:::::");
	console.log(req.files.Testfile);
	
	res.send(' Post test Result is called');
	
}]);

module.exports = router;





