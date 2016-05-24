var app = angular.module('myApp', []);

app.directive('optIn', function() {

	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="opt-in"><img src="adam.jpg" width=100% height=100%></div>',
		replace:true
	};
});
