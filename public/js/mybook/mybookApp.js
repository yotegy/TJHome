var mybookapp = angular.module('mybook',['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	  $routeProvider
	   .when('/insert', {
	    templateUrl: 'myBookmgmt/insert',
	    controller: 'mybookInsertController'
	   })	 
	   .otherwise({
	        redirectTo: '/'
	   });
	  	  
}]);




