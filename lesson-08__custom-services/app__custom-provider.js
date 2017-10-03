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

app.provider('calcService', function() {
    var baseUrl = '';

    this.config = function(url) {
        baseUrl = url;
    };

    this.$get = ['$log', '$http', function($log, $http) {
        $log.log('instantiating oCalcService');
        var oCalcService = {};

        oCalcService.getSum = function(a, b, cb) {
            var params = [
                'a=' + a,
                'b=' + b
            ],
            url = baseUrl + '/sum?' + params.join('&');
    
            $http({
                url: url,
                method: 'GET'
            }).then(
                function(response) {
                    $log.log(response.data);
                    cb(response.data);
                },
                function(response) {
                    $log.error("Error occured");
                }
            );
        }
        return oCalcService;
    }]
    
});

app.config(['calcServiceProvider', function(calcServiceProvider) {
    calcServiceProvider.config("http://localhost:4467");
}]);