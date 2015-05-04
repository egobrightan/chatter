'use strict';

/**
 * @ngdoc function
 * @name chatterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatterApp
 */
angular.module('chatterApp')
  .controller('MainCtrl', function ($scope) {

    $scope.room = {
      name: 'Room 1'
    };

    $scope.activity = [
      {
        user: {
          name: 'Mohammad Khatib'
        },
        message: 'Hey you guys do you wanna do lunch after this?',
        when: '3 mins ago'
      }, {
        user: {
          name: 'Rasha Khatib'
        },
        message: 'Sure, what do you have in mind?',
        when: '2 mins ago'
      }
    ];
  });
