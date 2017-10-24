var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl: './templates/sumurl.html',
        controller: 'sumurlCtrl'
    })
    .when('/suminput/', {
        templateUrl: './templates/suminput.html',
        controller: 'suminputCtrl'
    })
    .when('/sumfour/:a/:b?/:c?/:d', {
        templateUrl: './templates/sumfour.html',
        controller: 'sumfourCtrl'
    })
    .when('/calc/:option/:a?/:b?', {
        redirectTo: function(params, path, search) {
            if(params.option === 'sum') {
                return '/sumurl/' + (params.a - 0) + '/' + (params.b - 0);
            } else if (params.option === 'input') {
                return '/suminput';
            } else {
                return '/';
            }
        }
    })
    .when('/', {
        template: '<strong>Initial screen</strong>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non rerum tempore tenetur ut. ' +
        'Itaque, placeat?</p>'
    })
    .otherwise({
        template: "<p>No content available.</p>"
    });
}]);

app.controller('sumurlCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}]);

app.controller('suminputCtrl', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.calculateSum = function() {
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);

        $location.path(url);
    };
}]);

app.controller('sumfourCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
    $scope.c = $routeParams.c;
    $scope.d = $routeParams.d;

}]);