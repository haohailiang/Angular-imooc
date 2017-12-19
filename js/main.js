angular.module('myApp', []).controller('mainController', function($scope){
  $scope.userdata = {};

  $scope.submitSignup = function(){
    console.log($scope.userdata);
  }
})
.directive('compare', function(){
  var o = {};
  o.strict = 'AE';
  o.scope = {
    orgText: '=compare'
  };
  o.require = 'ngModel';
  o.link = function(scope, element, attribule, con){
    con.$validators.compare = function(value){
      return value == scope.orgText;
    }

    scope.$watch('orgText', function(){
      con.$validate();
    })
  }
  return o;
});
