var mybookapp = angular.module('mybook',['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/insert', {
	    templateUrl: '/insert',
	    controller: 'mybookInsertController',
	    
	  })	 
	  .otherwise({
	        redirectTo: '/'
	  });
	  
	  
	  $locationProvider.html5Mode(true);
});




