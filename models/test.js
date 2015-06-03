exports.dummyTestMethod = {
    'spec': {
        description : "Test method",
        path : "/Users/",
        method: "GET",
        summary : "This is a dummy test method",
        type : "void",
        nickname : "dummyTestMethod",
        produces : ["application/json"]
    },
    'action': function (req, res,next) {
    	//console.log(req.params.testID);
    	next();
        //res.send(JSON.stringify("test is ok"));
    }
};

exports.testresults = {
	    'spec': {
	        description : "Test method",
	        path : "/TestResults/",
	        method: "GET",
	        summary : "testresults",
	        type : "void",
	        nickname : "dummyTestMethod",
	        produces : ["application/json"]
	    },
	    'action': function (req, res,next) {
	    	//console.log(req.params.testID);
	    	next();
	        //res.send(JSON.stringify("test is ok"));
	    }
	};