var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var multer = require('multer');
var file = require('fs');
var xml2json = require('node-xml2json');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


/* GET Test Results listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify('Test Result List will come sooner or later...'));
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
	//console.log(req.files);
	
	var key,count = 0;
	
	for(key in req.files){
		
		console.log("Data : "+req.files[key].name);
		
		var json_data;
		file.readFile('./uploads/'+req.files[key].name,function(err,data){
			if (err) throw err;
			//console.log("file data: "+data);
			json_data = xml2json.parser(" "+data);
			console.log(json_data.testsuite.testcase);			
		});
				
		if(req.files.hasOwnProperty(key)){
			count++
		}
		
		
		// Delete file after insert data in the standard DB
		file.unlink('./uploads/'+req.files[key].name,function(err){
			if (err) throw err;	
			console.log(req.files[key].name+" is deleted");
		});
	}
	
	console.log(" count : "+count);
	
	
	res.send(' Post test Result is called');
	
}]);

module.exports = router;





