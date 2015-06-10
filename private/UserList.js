var mariaDB = require('mysql');
var dbpool = require('../configure/dbconnection').pool;
var async = require('async');

exports.showusers=function(req,res,next){
	
	async.waterfall(
			[
			 function(callback){
				 
				dbpool.getConnection(callback);
		     
			 },function(connection,callback){
				connection.query("select * from users limit ? ", [parseInt(req.query.number)],callback);
		     
			 },function(rows,fields,callback){
				 
				 callback(null,rows);
				 
			 }],function(err,results){
				if(err) {throw err;}
				
				console.log(results);
				res.json(results);
			}
	);
	
	
};
