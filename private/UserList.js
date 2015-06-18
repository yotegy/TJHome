var mariaDB = require('mysql');
var dbpool = require('../configure/dbconnection').pool;
var async = require('async');


exports.showusers=function(req,res,next){
	
	var limit_number = 10;
	
	if(req.query.hasOwnProperty('number')){
		if(isPositiveInteger(req.query.number)){
			limit_number = parseInt(req.query.number);
		}else{
			console.log("Number value is invalid");
		}
	}else{
		console.log("There isn't number query");
	}		
	
	async.waterfall(
			[
			 function(callback){
				 
				dbpool.getConnection(callback);
		     
			 },function(connection,callback){
				connection.query("select * from users limit ? ", [limit_number],callback);
		     
			 },function(rows,fields,callback){
				 
				 callback(null,rows);
				 
			 }],function(err,results){
				if(err) {throw err;}
				
				console.log(results);
				res.json(results);
			}
	);
	
	
};


function isPositiveInteger(n) {
    return n >>> 0 === parseFloat(n);
}
