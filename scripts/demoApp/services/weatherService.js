angular.module('weatherDemoApp')
	.service('weatherService', function($http, $q, modelLocator) {

		function getWeatherInfo() {
			// Podría cargarse y almacenarse en el servicio con deferred, y luego resolverlo
			// para que le llege al main.js cuando esté disponible
			// Creamos una variable en el servicio var catData;
			//
			// De esta manera se puede canalizar solo una petición porque si catData existe, podemos 
			// devolverlo, en vez de hacer la petición, o forzar la petición.
			// Para usar REST, se usa $resource y es un módulo a parte que es ng-resource, que se ha de 
			// incluir en el index como script de componentes a usar de angular

			var deferred = $q.defer();

			// Example URL request
			// api.worldweatheronline.com/free/v2/weather.ashx?q=oviedo&format=json&num_of_days=5&lang=es&key=a2e2e59e3ce0e2cf0e163c74c64c8
			// Params documentation
			// http://www.worldweatheronline.com/api/docs/local-city-town-weather-api.aspx
			$http({method: 'post', url: 'demodata/weather-data.json'}).then(
				function success(response) {
					modelLocator.setData('weather-info', response.data);
					deferred.resolve(response);
				},
				function error() {
					deferred.reject('Error loading weather info.');
				},
				function notify() {
					deferred.notify('Loading weather conditions...');
				}
			);

			return deferred.promise;
		}

		return {
			getWeatherInfo: getWeatherInfo
		}

	}
);