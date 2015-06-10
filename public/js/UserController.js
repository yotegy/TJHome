app.controller('UserController', function($scope,$http) {
    $scope.firstName= "Kim";
    $scope.lastName= "TJ";
    
    var url="http://localhost:3456/users?number=";
    
    url += 3;
    
    $http.get(url)
    .success(function(data){
    	console.log("##################### Data ###################");
    	console.log(data);
    	$scope.data = data;
    	var sum_temp = 0;
    	for(var i=0;i<data.length;i++){
    		sum_temp += data[i].age;
    	}
    	$scope.sum = sum_temp;
    });
    
});