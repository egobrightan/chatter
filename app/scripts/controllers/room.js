'use strict';

angular.module('chatterApp')
  .controller('RoomCtrl', function ($scope, $firebaseObject, $routeParams) {
    var roomRef = new Firebase("https://chatter-bzu.firebaseio.com/rooms/" + $routeParams.id);

    $scope.room = $firebaseObject(roomRef);

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
