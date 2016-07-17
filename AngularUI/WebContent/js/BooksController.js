angular.module('myApp').controller('BookController', function($scope, BookService){
	var books = BookService.query(function(){
		console.log(books);
	});
})