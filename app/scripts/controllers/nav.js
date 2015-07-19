'use strict';

angular.module('chatterApp').
  controller('NavCtrl', function ($scope, $rootScope, $location, $firebaseArray, $mdSidenav, $timeout, $firebaseAuth){
    var ref = new Firebase("https://msports.firebaseio.com");
    var roomsRef = new Firebase("https://msports.firebaseio.com/rooms");
    var authObj = $firebaseAuth(ref);

    var setCurrentUserFromAuthData = function(authData) {
      $timeout(function() {
        $rootScope.currentUser = {
          name: authData.facebook.displayName,
          avatar: authData.facebook.cachedUserProfile.picture.data.url
        }
      });
    };

    var anonoymousUser = {
      name: 'Anonoymous',
      avatar: 'http://i.imgur.com/JvIyM.jpg'
    };
    $rootScope.currentUser = anonoymousUser;

    var authData = authObj.$getAuth();
    setCurrentUserFromAuthData(authData);

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

      var newRoom = roomsRef.push({
        name: name
      });

      $scope.openRoom(newRoom);
    };

    $scope.loginWithFacebook = function() {
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          alert("Login Failed!", error);
          $rootScope.currentUser = anonoymousUser;
        } else {
          setCurrentUserFromAuthData(authData);
        }
      });
    };

  });
