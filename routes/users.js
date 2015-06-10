var express = require('express');
var router = express.Router();
var userlist = require('../private/UserList.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
	
  userlist.showusers(req,res,next);
});

module.exports = router;
