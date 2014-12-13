'use strict';

// Este formato permite extender en vez de definir la función anónima para el qTabsController
function ngWeatherController($scope, $sce) {
	this.weatherConditions = $scope.weatherProvider;
	console.log(this.weatherConditions);
}

ngWeatherController.prototype.getWeatherIcon = function (url) {
	return $sce.trustAsHtml(url);
}

angular.module('angular-weather')
	.controller('ngWeatherController', ngWeatherController);