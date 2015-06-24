app.controller('UserController', function($scope,$http) {
    
	$scope.firstName= "Kim";
    $scope.lastName= "TJ";    
    
    var url="http://localhost:3456/users?number=";
    
    $scope.setnum = 10;
        
    $scope.showlist=function(){
    	url += $scope.setnum;
	    $http.get(url)
	    .success(function(data){
	    	$scope.data = data;
	    	var sum_temp = 0;
	    	for(var i=0;i<data.length;i++){
	    		sum_temp += data[i].age;
	    	}
	    	$scope.sum = sum_temp;
	    });
	    url="http://localhost:3456/users?number=";
    };
    
    $scope.mySwitch = false;
    $scope.myImage = false;
    $scope.mySum = false;
        
    $scope.count = 0;
    
    
});