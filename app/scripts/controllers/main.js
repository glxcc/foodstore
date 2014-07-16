'use strict';

/**
 * @ngdoc function
 * @name foodstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodstoreApp
 */
angular.module('foodstoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
