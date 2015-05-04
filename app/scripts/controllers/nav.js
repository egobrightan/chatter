angular.module('chatterApp').
  controller('NavCtrl', function ($scope){
    $scope.currentUser = {
      name: 'Mohammad Khatib',
      email: 'mkhatib727@gmail.com'
    };

    $scope.rooms = [{
      name: 'Room 1'
    }, {
      name: 'Room 2'
    }, {
      name: 'Room 3'
    }];
  });
