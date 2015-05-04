'use strict';

/**
 * @ngdoc function
 * @name chatterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chatterApp
 */
angular.module('chatterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
