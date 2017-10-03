var app = angular.module( "app", [] );

app.controller( 'emp', [ '$scope', 'calcService', function($scope, calcService) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
        calcService.getSum( $scope.a, $scope.b, function(result) {
            $scope.sum = result;
        });
    }
}]);

app.service('calcService', [ '$http', '$log', function($http, $log) {
    $log.log( "instantiating calcService.." );

    this.getSum = function(a, b, cb) {
        var baseUrl = 'http://localhost:4467/sum?',
            params = [
                'a=' + a,
                'b=' + b
            ],
            url = baseUrl + params.join('&');

        $http({
            url: url,
            method: 'GET'
        }).then(
            function(response){
                $log.log(response.data);
                cb(response.data);
            }, 
            function(response){
                $log.error('Error occured');
            }
        )
    }
}]);