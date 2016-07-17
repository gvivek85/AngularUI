angular.module('myApp').factory('BookService',function($resource){
	return $resource('http://localhost:8080/demo/book/:id');
});