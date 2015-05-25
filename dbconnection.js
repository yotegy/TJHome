var mysql = require('mysql');

var pool = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : 'korea',
	databese : 'tjhome'
});

exports.pool = pool;