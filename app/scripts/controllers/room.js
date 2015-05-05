'use strict';

angular.module('chatterApp')
  .controller('RoomCtrl', function ($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams) {
    var roomRef = new Firebase("https://chatter-bzu.firebaseio.com/rooms/" + $routeParams.id);
    var messagesRef = new Firebase("https://chatter-bzu.firebaseio.com/messages/" + $routeParams.id);

    $scope.room = $firebaseObject(roomRef);

    $scope.messages = $firebaseArray(messagesRef);

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
