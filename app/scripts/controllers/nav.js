'use strict';

angular.module('chatterApp').
  controller('NavCtrl', function ($scope, $location){
    $scope.currentUser = {
      name: 'Mohammad Khatib',
      email: 'mkhatib727@gmail.com'
    };

    $scope.rooms = [{
      id: 1,
      name: 'Room 1'
    }, {
      id: 2,
      name: 'Room 2'
    }, {
      id: 3,
      name: 'Room 3'
    }];

    $scope.openRoom = function (room) {
      $location.path('/room/' + room.id);
    };
  });
