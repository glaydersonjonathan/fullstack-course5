(function() {

	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {

		$scope.ateMuch = function() {
			var temp = $scope.dishes.split(',');
			console.log('Original array', temp);
			var nonConformity = 0;

			var i;
			for(i=0; i < temp.length; i++) {
				temp[i] = temp[i].trim(); // Looks like the trimming from ng-model only trims the whitespaces before and after the whole string, it ignores the inner ones. Maybe it's somenthing to do with this specific angular version. This example on a different Angular version depicts the behavior I was expecting http://fiddle.jshell.net/Freewind/A8VzX/ test string: '     test1      ,       test2   ,,   , test3        '

				if(temp[i] === "") { // I guess Angular handles the empty spaces w/ the  built-in trim() function, so I don't need to check that. Nvm, see comment above.
					nonConformity++; // Counts the cases I don't consider as valid dishes
				}
			}
			console.log('ManuallyTrimmed array', temp);
			var ValidDishes = temp.length - nonConformity;

			if(ValidDishes === 0) {
				$scope.message = "Please enter data first";
			} else if (ValidDishes <= 3 && ValidDishes > 0) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		};
	}

})();