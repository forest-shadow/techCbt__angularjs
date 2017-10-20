var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/', {
        template: '<strong>Initial screen</strong>'
    })
    
    .when('/first-msg', {
        template: '<strong>First message</strong>',
        caseInsensitiveMatch: true
    })

    .when('/second-msg', {
        templateUrl: './templates/message1.html',
        controller: 'secondMessageCtrl'
    })

    .when('/third-msg', {
        // redirectTo: '/second-msg'
        redirectTo: function() {
            alert('this route is not implemented yet... now you will be redirec to first message page');

            return '/first-msg';
        }
    })

    .otherwise({
        template: "Page not found"
    });
}]);

app.controller('secondMessageCtrl', ['$scope', function($scope){ 
    $scope.a = 100;
    $scope.b = 200;
}]);