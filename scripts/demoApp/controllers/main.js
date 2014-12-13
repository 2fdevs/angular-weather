'use strict';

angular.module('weatherDemoApp')
    .controller('MainCtrl', function ($scope, weatherService) {

    	$scope.weatherProvider = {};

		var weatherConditions = weatherService.getWeatherInfo();
		if (weatherConditions.then) {
			weatherConditions.then(
				function success(response) {
					$scope.weatherProvider = response.data;
				},
				function error() {
					console.log('Error loading weather info.');
				},
				function notify(message) {
					console.log(message);
				}
			);
		}    	

    });
