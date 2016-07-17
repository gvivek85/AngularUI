angular.module('myApp',['ngRoute','ngResource']).config(function($routeProvider){
	
	$routeProvider
	.when("/home",{
		templateUrl:"pages/books.html"
	})
	.when("/profile",{
		templateUrl:"pages/profile.html"
	})
	.when("/messages", {
		templateUrl:"pages/messages.html"
	})
	.otherwise({redirectTo:'/'});;
	
});