var app = angular.module( "app", [] );

app.controller( 'sample', [ 
  '$scope', 
  '$parse', 
  '$interpolate', 
  function($scope, $parse, $interpolate) {
    
  $scope.a = 10;
  $scope.b = 20;

  $scope.demoParse = function() {
    var templateFn  = $parse("a * b"),
        result      = templateFn($scope);
    alert(result);

    // or

    alert($parse("a * b")($scope));

    // or

    alert($parse("a * b")({a: 2, b:3}));
  };

  $scope.demoInterpolate = function() {
    var templateFn  = $interpolate("Result = {{ a * b }}, Some other calculation = {{ a * b * 10 }}"),
        result      = templateFn($scope);

    alert(result);
    alert($interpolate("Result = {{ a * b | currency: 'USD $'}}")($scope));
  };
}]);