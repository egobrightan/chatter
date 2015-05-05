'use strict';

/**
 * @ngdoc function
 * @name chatterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatterApp
 */
angular.module('chatterApp')
  .controller('MainCtrl', function ($scope, $mdSidenav) {

    $scope.toggleMenu = function(menu) {
      $mdSidenav(menu).toggle();
    };

  });
