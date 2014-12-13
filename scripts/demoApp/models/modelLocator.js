angular.module('weatherDemoApp')
	.service('modelLocator', function() {
		var data = {};

		function setData(key, value) {
			data[key] = value
		}

		function getData(key) {
			return data[key];
		}

		function removeData(key) {
			data[key] = null;
		}

		return {
			setData: setData,
			getData: getData,
			removeData: removeData
		}
	});