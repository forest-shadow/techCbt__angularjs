var app = angular.module( "app", [] );

app.controller( 'emp', [ '$scope', 'calcFactory', function($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
        // syncronous type of calculation. Whole following code will be waiting 
        // for the end of this calculation
        // $scope.sum = calcFactory.getSum($scope.a, $scope.b);

        // Implement the same functionality with callback syntax. If callback 
        // invoked as part of async request, it will be also an async 
        // implementation of calculation
        calcFactory.getSum( $scope.a, $scope.b, function(result) {
            $scope.sum = result;
        });
    }
}]);

app.factory('calcFactory', [ '$http', '$log', function($http, $log) {
    $log.log( "instantiating calcFactory.." );
    var oCalcService = {};

    // sync implementation
    // oCalcService.getSum = function(a, b) {
    //     return parseInt(a) + parseInt(b);     
    // };

    // sync implementation with callback
    // oCalcService.getSum = function(a, b, cb) {
    //     var s = parseInt(a) + parseInt(b);
    //     cb(s); 
    // }

    // async implementation with callback syntax
    oCalcService.getSum = function(a, b, cb) {
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

    return oCalcService;
}]);