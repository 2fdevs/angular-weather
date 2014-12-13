'use strict';

angular.module('weatherDemoApp')
	.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/demoApp/views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);

// Con un resolve en cada vista, se podría forzar a que no se carga ni la vista ni el controlador
// hasta que lo que se incluye en el resolve se termina. Esto podría combinarse con la caarga del json
// para que hasta no se tengan los datos no se muestre la vista. ngProgress es una directiva que se podría
// usar para controlar esa carga con un preloader.