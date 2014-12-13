'use strict';

angular.module('angular-weather')
	.directive('ngWeather', function() {
		return {
			restrict: 'E',
			templateUrl: 'scripts/angular-weather/views/widget.html',
			controller: 'ngWeatherController',
			controllerAs: 'controller',
			scope: {
				weatherProvider: "="
			}	
		};
	});