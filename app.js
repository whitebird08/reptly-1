angular.module('reptlyApp', ['ngRoute'])
	.controller('HomeController', function($scope) {
		$scope.title = "Reptly";
		console.log('something');
	})
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: '/partials/home.html',
				controller: 'HomeController'
			})
		$locationProvider.html5Mode(true);
	})