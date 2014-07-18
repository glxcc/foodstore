'use strict';

/**
 * @ngdoc overview
 * @name foodstoreApp
 * @description
 * # foodstoreApp
 *
 * Main module of the application.
 */
angular
    .module('foodstoreApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'customFilters'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/food', {
                templateUrl: 'views/food.html',
                controller: 'FoodCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
