var express = require('express');
var router = express.Router();
var userlist = require('../private/UserList.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	
  userlist.showusers(req,res,next);
});

router.get('/:UserID',function(req,res,next){
	var user_id = { UserID :req.params.UserID };
	res.render('index',user_id);
});

module.exports = router;
