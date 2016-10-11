(function() {
	'use strict'; // Protect the app against mistakes, such as the x variable

	x = "hello"; // Not var means it's in the global scope

	angular.module('myFirstApp', [])
		.controller('MyFirstController', function() {
			
		})

})();
