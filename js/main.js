angular.module('myApp', []).controller('mainController', function($scope){
  $scope.userdata = {};

  $scope.submitSignup = function(){
    console.log($scope.userdata);
  }
});
