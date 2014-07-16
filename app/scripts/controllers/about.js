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
  });
