'use strict';

angular.module('chatterApp').
  controller('NavCtrl', function ($scope, $location, $firebaseArray){
    var roomsRef = new Firebase("https://chatter-bzu.firebaseio.com/rooms");

    $scope.currentUser = {
      name: 'Mohammad Khatib'
    };

    $scope.rooms = $firebaseArray(roomsRef);

    $scope.openRoom = function (room) {
      $location.path('/room/' + room.$id);
    };

    $scope.showCreateRoomDialog = function (ev) {
      var name = prompt('What do you want to call the room?');
      if (!name) {
        alert('You need to give the room a name.');
        return;
      }

      roomsRef.push({
        name: name
      });

    };
  });
