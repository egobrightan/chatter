'use strict';

angular.module('chatterApp').
  controller('NavCtrl', function ($scope, $rootScope, $location, $firebaseArray, $mdSidenav){
    var roomsRef = new Firebase("https://chatter-bzu.firebaseio.com/rooms");

    $rootScope.currentUser = {
      name: 'Mohammad Khatib'
    };

    $scope.rooms = $firebaseArray(roomsRef);

    $scope.openRoom = function (room) {
      $location.path('/room/' + room.$id);
      $mdSidenav('left').close();
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
