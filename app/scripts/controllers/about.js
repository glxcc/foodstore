'use strict';

/**
 * @ngdoc function
 * @name foodstoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foodstoreApp
 */
angular.module('foodstoreApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.food = {
            products: [
                {name: 'product #1', description: 'product 1', category: 'cat1', price: 100},
                {name: 'product #2', description: 'product 2', category: 'cat2', price: 200},
                {name: 'product #3', description: 'product 3', category: 'cat3', price: 300},
                {name: 'product #4', description: 'product 4', category: 'cat4', price: 400}
            ]
        }
    });
