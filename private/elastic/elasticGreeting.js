var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

exports.greeting=function(req,res,next){
	
	console.log(" Elastic contents");
	
	client.create({
		
		index : 'junit_result',
		type : 'testcyclerun',
		//id : '2015-07-10',
		body: { 
			time : "2015-07-13",
			tc:	[{
				classname : "com.sds.test",
				name : "plus",
				status : "pass"
				
			},
			{
				classname : "com.sds.test",
				name : "minus",
				status : "fail",
				failure : "This is not my biz"
			},
			{
				classname : "com.sds.test",
				name : "hello",
				status : "fail",
				failure : "This is wrong data"
			}]
			
		}
	},function(error,response){
		res.send(response);
	}	
	);	
		
};

exports.search=function(req,res,next){
	
	console.log(" Elastic search");
	
	client.search({
		
		index : 'junit_result',
		id : '2015-07-02',
		body : {
			query : {
				match : {
					name : "minus"
				}
			}
		}
	},function(error,response){
		res.send(response);
	}	
	);	
		
};


exports.suggest=function(req,res,next){
	
	console.log(" Elastic suggest");
	
	client.suggest({
		
		index : 'junit_result',
		body : {
			mysuggester : {
				text : 'minus',
				terms: {
					field : 'name'
				}
			}
		}
	},function(error,response){
		res.send(response);
	}	
	);	
		
};
