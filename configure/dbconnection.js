var mysql = require('mysql');

var pool = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : 'korea',
	database : 'tjhome'
});

export.pool = pool;


