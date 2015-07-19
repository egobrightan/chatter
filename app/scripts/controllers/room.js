'use strict';

angular.module('chatterApp')
  .controller('RoomCtrl', function ($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams, $mdSidenav) {
    var roomRef = new Firebase("https://msports.firebaseio.com/rooms/" + $routeParams.id);
    var messagesRef = new Firebase("https://msports.firebaseio.com/messages/" + $routeParams.id);

    $scope.room = $firebaseObject(roomRef);
    $scope.messages = $firebaseArray(messagesRef);

    $scope.toggleMenu = function(menu) {
      $mdSidenav(menu).toggle();
    };

    $scope.sendMessage = function (event, message) {
      if (event.keyCode === 13) {
        messagesRef.push({
          user: $rootScope.currentUser,
          message: message,
          when: Firebase.ServerValue.TIMESTAMP
        });
        $scope.newMessage = '';
      }
    }
  });
